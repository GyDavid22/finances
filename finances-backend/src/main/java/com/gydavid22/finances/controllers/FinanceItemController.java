package com.gydavid22.finances.controllers;

import com.gydavid22.finances.dtos.FinanceItemDTO;
import com.gydavid22.finances.entities.FinanceItem;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.services.FinanceItemService;
import com.gydavid22.finances.services.SessionService;
import com.gydavid22.finances.services.FinanceItemService.IntervalType;
import com.gydavid22.finances.services.FinanceItemService.SortType;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class FinanceItemController {
    @Autowired
    private final SessionService sessionService;
    @Autowired
    private final FinanceItemService financeItemService;

    public FinanceItemController(SessionService sessionService, FinanceItemService financeItemService) {
        this.sessionService = sessionService;
        this.financeItemService = financeItemService;
    }

    /**
     * Returns all finance items belonging to the session, supports filtering. If
     * type or date is missing, returns everything in a descending order.
     * 
     * @param request
     * @param response
     * @param type
     * @param date     Must follow ISO format. Examples: Year - 2023, Month -
     *                 2023-11, Week - 2023-11-20 (start day of the week)
     * @return
     */
    @GetMapping("api/items")
    public ResponseEntity<?> getAll(HttpServletRequest request, HttpServletResponse response,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String date,
            @RequestParam(required = false) String sort) {
        User user = checkCookieValidity(request, response);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (sort == null) {
            sort = SortType.DESC.toString();
        }
        if (type != null && date != null) {
            try {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(financeItemService.getForUserByInterval(user, IntervalType.valueOf(type.toUpperCase()),
                                date, SortType.valueOf(sort.toUpperCase())));
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(financeItemService.getAllForUser(user, SortType.valueOf(sort.toUpperCase())));
    }

    @GetMapping("api/items/{id}")
    public ResponseEntity<?> getOne(HttpServletRequest request, HttpServletResponse response, @PathVariable Long id) {
        User user = checkCookieValidity(request, response);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        FinanceItem item = checkIdBelongsToUser(user, id);
        if (item == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(FinanceItemDTO.convertToDto(item));
    }

    @DeleteMapping("api/items/{id}")
    public ResponseEntity<?> delete(HttpServletRequest request, HttpServletResponse response, @PathVariable Long id) {
        User user = checkCookieValidity(request, response);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        FinanceItem item = checkIdBelongsToUser(user, id);
        if (item == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        financeItemService.delete(item);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PostMapping("api/items")
    public ResponseEntity<?> create(HttpServletRequest request, HttpServletResponse response,
            @RequestBody FinanceItemDTO dto) {
        User user = checkCookieValidity(request, response);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        FinanceItem result = financeItemService.create(user, dto);
        if (result == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(FinanceItemDTO.convertToDto(result));
    }

    @PutMapping("api/items/{id}")
    public ResponseEntity<?> update(HttpServletRequest request, HttpServletResponse response, @PathVariable Long id,
            @RequestBody FinanceItemDTO dto) {
        User user = checkCookieValidity(request, response);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        FinanceItem item = checkIdBelongsToUser(user, id);
        if (item == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        boolean result = financeItemService.update(dto, item);
        if (!result) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    private User checkCookieValidity(HttpServletRequest request, HttpServletResponse response) {
        if (request.getCookies() == null) {
            return null;
        }
        User result = null;
        for (Cookie i : request.getCookies()) {
            if (i.getName().equals(SessionService.SESSION_COOKIE_NAME)) {
                result = sessionService.getUserForSession(i);
                if (result != null) {
                    return result;
                }
                sessionService.invalidateCookie(i);
                response.addCookie(i);
                return null;
            }
        }
        return null;
    }

    private FinanceItem checkIdBelongsToUser(User user, Long financeItemId) {
        FinanceItem financeItem = financeItemService.getById(financeItemId);
        if (financeItem == null) {
            return null;
        }
        if (user.getFinanceItems().contains(financeItem)) {
            return financeItem;
        }
        return null;
    }
}
