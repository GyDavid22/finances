package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gydavid22.finances.entities.FinanceItem;

import java.time.LocalDate;

@JsonSerialize
public class FinanceItemDTO {
    private Long id;
    private Double amount;
    private String name;
    private LocalDate date;
    private String description;
    private String type;

    public FinanceItemDTO() {
    }

    public FinanceItemDTO(Long id, Double amount, String name, LocalDate date, String description, String type) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.date = date;
        this.description = description;
        this.type = type;
    }

    public static FinanceItemDTO convertToDto(FinanceItem financeItem) {
        return new FinanceItemDTO(financeItem.getId(), financeItem.getAmount(), financeItem.getName(), financeItem.getDate(), financeItem.getDescription(), financeItem.getType().toString());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
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

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
