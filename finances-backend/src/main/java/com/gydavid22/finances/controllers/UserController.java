package com.gydavid22.finances.controllers;

import com.gydavid22.finances.dtos.UserLoginRegistrationDTO;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.services.SessionService;
import com.gydavid22.finances.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private final UserService userService;

    @Autowired
    private final SessionService sessionService;

    public UserController(UserService userService, SessionService sessionService) {
        this.userService = userService;
        this.sessionService = sessionService;
    }

    @PostMapping("/user")
    public ResponseEntity<String> createUser(HttpServletRequest request, HttpServletResponse response, @RequestBody UserLoginRegistrationDTO toCreate) {
        if (checkCookieValidity(request, response)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Log out first");
        }
        boolean didSucceed = this.userService.createUser(toCreate);
        if (didSucceed) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/user/auth")
    public ResponseEntity<?> authenticate(HttpServletRequest request, HttpServletResponse response, @RequestBody UserLoginRegistrationDTO toAuth) {
        if (checkCookieValidity(request, response)) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        User result = this.userService.authenticate(toAuth);
        if (result != null) {
            Cookie session = sessionService.generateSessionCookie(result);
            response.addCookie(session);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping("/user/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        if (!checkCookieValidity(request, response)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        sessionService.invalidateSession(request, response);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/user")
    public ResponseEntity<?> delete(HttpServletRequest request, HttpServletResponse response) {
        if (!checkCookieValidity(request, response)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        User user = null;
        for (Cookie i : request.getCookies()) {
            if (i.getName().equals(SessionService.SESSION_COOKIE_NAME)) {
                user = sessionService.getUserForSession(i);
            }
        }
        sessionService.invalidateSession(request, response);
        userService.deleteUser(user);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    private boolean checkCookieValidity(HttpServletRequest request, HttpServletResponse response) {
        if (request.getCookies() == null) {
            return false;
        }
        for (Cookie i : request.getCookies()) {
            if (i.getName().equals(SessionService.SESSION_COOKIE_NAME)) {
                if (sessionService.getUserForSession(i) != null) {
                    return true;
                }
                sessionService.invalidateCookie(i);
                response.addCookie(i);
                return false;
            }
        }
        return false;
    }
}
