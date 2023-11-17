package com.gydavid22.finances.entities;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "sessions_table", indexes = {@Index(columnList = "session_id")})
public class Session {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "session_id", unique = true)
    private char[] sessionId;
    @ManyToOne
    private User user;
    private Date lastInteraction;

    public Session() {
    }

    public Session(Long id, char[] sessionId, User user, Date lastInteraction) {
        this.id = id;
        this.sessionId = sessionId;
        this.user = user;
        this.lastInteraction = lastInteraction;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public char[] getSessionId() {
        return sessionId;
    }

    public void setSessionId(char[] sessionId) {
        this.sessionId = sessionId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getLastInteraction() {
        return lastInteraction;
    }

    public void setLastInteraction(Date lastInteraction) {
        this.lastInteraction = lastInteraction;
    }
}
