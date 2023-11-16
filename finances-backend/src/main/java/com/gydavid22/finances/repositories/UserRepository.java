package com.gydavid22.finances.repositories;

import com.gydavid22.finances.entities.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public List<User> findByUserName(String userName);
}
