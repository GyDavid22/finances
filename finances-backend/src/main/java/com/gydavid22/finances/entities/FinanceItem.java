package com.gydavid22.finances.entities;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "finance_items_table", indexes = {@Index(columnList = "id,date")})
public class FinanceItem {
    @Id
    @GeneratedValue
    private Long id;
    private double amount;
    private String name;
    private LocalDate date;
    @Nullable
    private String description;
    @Enumerated(value = EnumType.ORDINAL)
    private Type type;
    @ManyToOne
    private User user;

    public FinanceItem() {
    }

    public FinanceItem(Long id, double amount, String name, LocalDate date, String description, User user, Type type) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.date = date;
        this.description = description;
        this.user = user;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public enum Type {
        FOOD_DRINK, HOUSING_UTILITIES, CLOTHING_SHOES, TRAVEL_LEISURE, HEALTH_MEDICAL, EDUCATION_LEARNING, ENTERTAINMENT_HOBBY, SAVINGS_INVESTMENTS, OTHER
    }
}
