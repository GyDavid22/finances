package com.gydavid22.finances.services;

import com.gydavid22.finances.dtos.FinanceItemDTO;
import com.gydavid22.finances.entities.FinanceItem;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.FinanceItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<FinanceItemDTO> getAllForUser(User user) {
        return repo.findByUserOrderByDateAsc(user).stream().map(FinanceItemDTO::convertToDto).toList();
    }

    public FinanceItem create(User user, FinanceItemDTO dto) {
        if (!checkValidity(dto)) {
            return null;
        }
        FinanceItem newItem = new FinanceItem(null, dto.getAmount(), dto.getName(), dto.getDate(), dto.getDescription(), user);
        repo.saveAndFlush(newItem);
        return newItem;
    }

    public boolean update(FinanceItemDTO dto, FinanceItem toUpdate) {
        if (!checkValidity(dto)) {
            return false;
        }
        toUpdate.setAmount(dto.getAmount());
        toUpdate.setDate(dto.getDate());
        toUpdate.setDescription(dto.getDescription());
        toUpdate.setName(dto.getName());
        repo.saveAndFlush(toUpdate);
        return true;
    }

    public void delete(FinanceItem financeItem) {
        repo.delete(financeItem);
        repo.flush();
    }

    public FinanceItem getById(Long id) {
        return repo.getReferenceById(id);
    }

    private boolean checkValidity(FinanceItemDTO dto) {
        return !(dto.getAmount() == null || dto.getName() == null || dto.getDate() == null);
    }
}
