package com.gydavid22.finances.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.sql.Date;
import java.util.Collection;

@Entity
@Table(name = "users_table")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String userName; // Index
    private char[] salt;
    private char[] hashedPassword;
    private Date registrationDate;

    @OneToMany
    private Collection<FinanceItem> financeItems;

    public User() {
    }

    public User(Long id, String userName, char[] salt, char[] hashedPassword) {
        this.id = id;
        this.userName = userName;
        this.salt = salt;
        this.hashedPassword = hashedPassword;
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

    public char[] getSalt() {
        return salt;
    }

    public void setSalt(char[] salt) {
        this.salt = salt;
    }

    public char[] getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(char[] hashedPassword) {
        this.hashedPassword = hashedPassword;
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
