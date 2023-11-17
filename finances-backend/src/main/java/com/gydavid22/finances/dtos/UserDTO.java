package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gydavid22.finances.entities.FinanceItem;
import com.gydavid22.finances.entities.User;

import java.sql.Date;
import java.util.Collection;

@JsonSerialize
public class UserDTO {
    private Long id;
    private String userName;
    private Date registrationDate;
    private Collection<FinanceItem> financeItems;

    public UserDTO() {
    }

    public UserDTO(Long id, String userName, Date registrationDate, Collection<FinanceItem> financeItems) {
        this.id = id;
        this.userName = userName;
        this.registrationDate = registrationDate;
        this.financeItems = financeItems;
    }

    public static UserDTO convertToDto(User toConvert) {
        if (toConvert == null) {
            return null;
        }
        return new UserDTO(toConvert.getId(), toConvert.getUserName(), toConvert.getRegistrationDate(), toConvert.getFinanceItems());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Collection<FinanceItem> getFinanceItems() {
        return financeItems;
    }

    public void setFinanceItems(Collection<FinanceItem> financeItems) {
        this.financeItems = financeItems;
    }
}
