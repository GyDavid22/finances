package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class UserLoginRegistrationDTO {
    private String username;
    private char[] password;

    public UserLoginRegistrationDTO() {
    }

    public UserLoginRegistrationDTO(String userName, char[] password) {
        this.username = userName;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public char[] getPassword() {
        return password;
    }

    public void setPassword(char[] password) {
        this.password = password;
    }

}
