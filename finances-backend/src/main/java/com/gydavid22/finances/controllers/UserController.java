package com.gydavid22.finances.controllers;

import com.gydavid22.finances.dtos.UserDTO;
import com.gydavid22.finances.dtos.UserLoginRegistrationDTO;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/user")
    public UserDTO[] getAllUser() {
        List<User> results = this.service.getAll();
        UserDTO[] returnValues = new UserDTO[results.size()];
        for (int i = 0; i < results.size(); i++) {
            returnValues[i] = UserDTO.convertToDto(results.get(i));
        }
        return returnValues;
    }

    @GetMapping("/user/{id}")
    public UserDTO getById(@PathVariable Long id) {
        return UserDTO.convertToDto(this.service.getById(id));
    }

    @PostMapping("/user/create")
    public ResponseEntity<String> createUser(@RequestBody UserLoginRegistrationDTO toCreate) {
        boolean didSucceed = this.service.createUser(toCreate);
        if (didSucceed) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already taken");
    }

    @GetMapping("/user/auth")
    public ResponseEntity<?> authenticate(@RequestBody UserLoginRegistrationDTO toAuth) {
        if (this.service.authenticate(toAuth)) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
