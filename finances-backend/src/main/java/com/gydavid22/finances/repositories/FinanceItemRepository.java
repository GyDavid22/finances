package com.gydavid22.finances.repositories;

import com.gydavid22.finances.entities.FinanceItem;
import com.gydavid22.finances.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FinanceItemRepository extends JpaRepository<FinanceItem, Long> {
    public List<FinanceItem> findByUserOrderByDateDesc(User user);
    public List<FinanceItem> findByUserAndDateBetweenOrderByDateDesc(User user, LocalDate start, LocalDate end);
}
