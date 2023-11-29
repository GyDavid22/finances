package com.gydavid22.finances.services;

import com.gydavid22.finances.dtos.FinanceItemDTO;
import com.gydavid22.finances.entities.FinanceItem;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.FinanceItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
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

    public List<FinanceItemDTO> getAllForUser(User user, SortType type) {
        if (type == SortType.DESC) {
            return repo.findByUserOrderByDateDesc(user).stream().map(FinanceItemDTO::convertToDto).toList();
        }
        return repo.findByUserOrderByDateAsc(user).stream().map(FinanceItemDTO::convertToDto).toList();
    }

    public List<FinanceItemDTO> getForUserByInterval(User user, IntervalType type, String date, SortType stype) {
        LocalDate start, end;
        start = end = LocalDate.now();
        if (type == IntervalType.YEAR) {
            start = LocalDate.of(Integer.parseInt(date), 1, 1);
            end = LocalDate.of(Integer.parseInt(date), 12, 31);
        } else if (type == IntervalType.MONTH) {
            String[] splitted = date.split("-");
            int year = Integer.parseInt(splitted[0]);
            int month = Integer.parseInt(splitted[1]);
            YearMonth ym = YearMonth.of(year, month);
            start = LocalDate.of(year, month, 1);
            end = LocalDate.of(year, month, ym.lengthOfMonth());
        } else if (type == IntervalType.WEEK) {
            start = LocalDate.parse(date);
            end = start.plusDays(6);
        }
        if (stype == SortType.DESC) {
            return repo.findByUserAndDateBetweenOrderByDateDesc(user, start, end).stream()
                    .map(FinanceItemDTO::convertToDto)
                    .toList();
        }
        return repo.findByUserAndDateBetweenOrderByDateAsc(user, start, end).stream().map(FinanceItemDTO::convertToDto)
                .toList();
    }

    public FinanceItem create(User user, FinanceItemDTO dto) {
        if (!checkValidity(dto)) {
            return null;
        }
        try {
            String description = (dto.getDescription() != null && dto.getDescription().equals("")) ? null
                    : dto.getDescription();
            FinanceItem newItem = new FinanceItem(null, dto.getAmount(), dto.getName(), dto.getDate(),
                    description, user, FinanceItem.Type.valueOf(dto.getType().toUpperCase()));
            repo.saveAndFlush(newItem);
            return newItem;
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    public boolean update(FinanceItemDTO dto, FinanceItem toUpdate) {
        if (!checkValidity(dto)) {
            return false;
        }
        toUpdate.setAmount(dto.getAmount());
        toUpdate.setDate(dto.getDate());
        if (dto.getDescription() != null && dto.getDescription().equals("")) {
            toUpdate.setDescription(null);
        } else {
            toUpdate.setDescription(dto.getDescription());
        }
        toUpdate.setName(dto.getName());
        try {
            toUpdate.setType(FinanceItem.Type.valueOf(dto.getType().toUpperCase()));
            repo.saveAndFlush(toUpdate);
        } catch (IllegalArgumentException e) {
            return false;
        }
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
        return !(dto.getAmount() == null || dto.getName() == null || dto.getDate() == null || dto.getType() == null
                || dto.getAmount() <= 0 || dto.getName().length() < 3);
    }

    public enum IntervalType {
        WEEK, MONTH, YEAR
    }

    public enum SortType {
        ASC, DESC
    }
}
