package com.gydavid22.finances.services;

import com.gydavid22.finances.entities.Session;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.SessionRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Base64;
import java.util.List;

@Service
public class SessionService {
    public final static String SESSION_COOKIE_NAME = "session";
    private final Cookie EMPTY_SESSION;

    @Autowired
    private final SessionRepository repo;

    public SessionService(SessionRepository repo) {
        this.repo = repo;
        this.EMPTY_SESSION = new Cookie(SessionService.SESSION_COOKIE_NAME, "");
        this.EMPTY_SESSION.setMaxAge(0);
        this.EMPTY_SESSION.setHttpOnly(true);
        this.EMPTY_SESSION.setAttribute("SameSite", "None");
        this.EMPTY_SESSION.setSecure(true);
    }

    /**
     * Creates a cookie for a new session, containing the session ID
     *
     * @param user User to the cookie should belong to
     * @return The created cookie
     */
    public Cookie generateSessionCookie(User user) {
        String sessionId = generateSecureRandomCharSequence();
        boolean ok = false;
        while (!ok) {
            if (this.repo.findBySessionId(sessionId.toCharArray()).isEmpty()) {
                ok = true;
            } else {
                sessionId = generateSecureRandomCharSequence();
            }
        }
        this.repo.saveAndFlush(new Session(null, sessionId.toCharArray(), user, new Date()));
        Cookie cookie = new Cookie(SessionService.SESSION_COOKIE_NAME, sessionId);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setAttribute("SameSite", "None");
        cookie.setSecure(true);
        // on a production version secure and domain would also be set
        return cookie;
    }

    /**
     * Removes the value of a cookie and sets Max-Age to 0
     *
     * @param cookie Cookie to invalidate
     */
    public void invalidateCookie(Cookie cookie) {
        cookie.setMaxAge(0);
        cookie.setValue("");
    }

    /**
     * Invalidates current session and sends an empty cookie back
     *
     * @param request
     * @param response
     */
    public void invalidateSession(HttpServletRequest request, HttpServletResponse response) {
        if (request.getCookies() == null) {
            return;
        }
        for (Cookie i : request.getCookies()) {
            if (i.getName().equals(SessionService.SESSION_COOKIE_NAME)) {
                List<Session> results = this.repo.findBySessionId(i.getValue().toCharArray());
                if (!results.isEmpty()) {
                    this.repo.delete(results.get(0));
                }
                invalidateCookie(i);
                response.addCookie(i);
            }
        }
    }

    /**
     * Checks the validity of a session cookie
     *
     * @param cookie A cookie named "session"
     * @return The User object the session ID belongs to, null if the cookie is invalid for some reason
     */
    public User getUserForSession(Cookie cookie) {
        if (!cookie.getName().equals(SessionService.SESSION_COOKIE_NAME)) {
            return null;
        }
        List<Session> result = this.repo.findBySessionId(cookie.getValue().toCharArray());
        if (result.isEmpty()) {
            return null;
        }
        Session resultSession = result.get(0);
        resultSession.setLastInteraction(new Date());
        repo.saveAndFlush(resultSession);
        return resultSession.getUser();
    }

    /**
     * Deletes all open sessions related to a user
     *
     * @param user
     */
    public void deleteAllForUser(User user) {
        this.repo.deleteAll(user.getSessions());
        this.repo.flush();
    }

    /**
     * Generates a 64 byte long character sequence using SecureRandom to be used as session ID
     *
     * @return
     */
    private String generateSecureRandomCharSequence() {
        SecureRandom sr = new SecureRandom();
        byte[] values = new byte[64];
        sr.nextBytes(values);
        return Base64.getEncoder().encodeToString(values);
    }

    /**
     * @return A cookie with an empty value for "session" and with a Max-Age of 0
     */
    public Cookie getEmptySessionCookie() {
        return this.EMPTY_SESSION;
    }

    /**
     * Removes all session entries older in days than stated in the parameter
     * @param days
     */
    public void removeOlderThan(int days) {
        LocalDate now = LocalDate.now();
        List<Session> results = this.repo.findAll().stream().filter(s -> {
            LocalDate lastInteracion = s.getLastInteraction().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            return ChronoUnit.DAYS.between(lastInteracion, now) > days;
        }).toList();
        this.repo.deleteAll(results);
        this.repo.flush();
    }
}
