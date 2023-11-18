package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gydavid22.finances.entities.User;

import java.sql.Date;

@JsonSerialize
public class UserDTO {
    private Long id;
    private String username;
    private Date registrationDate;

    public UserDTO() {
    }

    public UserDTO(Long id, String userName, Date registrationDate) {
        this.id = id;
        this.username = userName;
        this.registrationDate = registrationDate;
    }

    public static UserDTO convertToDto(User toConvert) {
        if (toConvert == null) {
            return null;
        }
        return new UserDTO(toConvert.getId(), toConvert.getUserName(), toConvert.getRegistrationDate());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }
}
