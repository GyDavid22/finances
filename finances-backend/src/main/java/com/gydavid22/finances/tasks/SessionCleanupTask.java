package com.gydavid22.finances.tasks;

import com.gydavid22.finances.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class SessionCleanupTask {
    @Autowired
    private SessionService sessionService;

    public SessionCleanupTask(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @Scheduled(fixedRate = 86400000) // once every day
    public void removeOldSessions() {
        this.sessionService.removeOlderThan(1);
    }
}
