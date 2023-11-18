package com.gydavid22.finances.entities;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Collection;

@Entity
@Table(name = "users_table", indexes = {@Index(columnList = "id,user_name")})
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "user_name", unique = true)
    private String userName;
    private char[] salt;
    private char[] hashedPassword;
    private Date registrationDate;

    @OneToMany(mappedBy = "user")
    private Collection<FinanceItem> financeItems;

    @OneToMany(mappedBy = "user")
    private Collection<Session> sessions;

    public User() {
    }

    public User(Long id, String userName, char[] salt, char[] hashedPassword, Date registrationDate, Collection<FinanceItem> financeItems, Collection<Session> sessions) {
        this.id = id;
        this.userName = userName;
        this.salt = salt;
        this.hashedPassword = hashedPassword;
        this.registrationDate = registrationDate;
        this.financeItems = financeItems;
        this.sessions = sessions;
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

    public Collection<Session> getSessions() {
        return sessions;
    }

    public void setSessions(Collection<Session> sessions) {
        this.sessions = sessions;
    }
}
