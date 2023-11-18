package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.time.LocalDate;

@JsonSerialize
public class FinanceItemDTO {
    private Long id;
    private double amount;
    private String name;
    private LocalDate date;
    private String description;

    public FinanceItemDTO() {
    }

    public FinanceItemDTO(Long id, double amount, String name, LocalDate date, String description) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.date = date;
        this.description = description;
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
}
