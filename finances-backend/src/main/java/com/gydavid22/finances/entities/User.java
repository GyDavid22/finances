package com.gydavid22.finances.entities;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String userName; // Index
    private String salt;
    private String hashedPassword;

    @OneToMany
    private Set<FinanceItem> financeItems;

    public User() {}

    public User(int id, String userName, String salt, String hashedPassword) {
        this.id = id;
        this.userName = userName;
        this.salt = salt;
        this.hashedPassword = hashedPassword;
    }

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public Set<FinanceItem> getFinanceItems() {
        return this.financeItems;
    }
}
