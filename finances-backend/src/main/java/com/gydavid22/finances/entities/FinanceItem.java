package com.gydavid22.finances.entities;

import java.time.LocalDate;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class FinanceItem {
    @Id
    @GeneratedValue
    private int id;
    private double amount;
    private String name;
    private LocalDate date;
    @Nullable
    private String description;

    @ManyToOne
    private User user;

    public FinanceItem() {
    }

    public FinanceItem(int id, double amount, String name, LocalDate date, String description, User user) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.date = date;
        this.description = description;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
