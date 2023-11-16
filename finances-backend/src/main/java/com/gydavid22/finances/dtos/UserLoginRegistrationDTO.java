package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class UserLoginRegistrationDTO {
    private String userName;
    private char[] password;

    public UserLoginRegistrationDTO() {
    }

    public UserLoginRegistrationDTO(String userName, char[] password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public char[] getPassword() {
        return password;
    }

    public void setPassword(char[] password) {
        this.password = password;
    }

}
