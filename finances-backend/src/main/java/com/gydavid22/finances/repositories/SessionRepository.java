package com.gydavid22.finances.repositories;

import com.gydavid22.finances.entities.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SessionRepository extends JpaRepository<Session, Long> {
    public List<Session> findBySessionId(char[] id);
}
