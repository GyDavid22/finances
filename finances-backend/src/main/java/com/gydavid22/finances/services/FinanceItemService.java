package com.gydavid22.finances.services;

import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.FinanceItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FinanceItemService {
    @Autowired
    private final FinanceItemRepository repo;

    public FinanceItemService(FinanceItemRepository repo) {
        this.repo = repo;
    }

    public void deleteAllForUser(User user) {
        repo.deleteAll(user.getFinanceItems());
        repo.flush();
    }
}
