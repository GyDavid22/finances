package com.gydavid22.finances.services;

import com.gydavid22.finances.dtos.UserLoginRegistrationDTO;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private final UserRepository repo;

    @Autowired
    private final SessionService sessionService;

    public UserService(UserRepository repo, SessionService sessionService) {
        this.repo = repo;
        this.sessionService = sessionService;
    }

    /**
     * Creates the user with the parameters in the DTO object
     *
     * @param toCreate
     * @return True, if the creation was successful, false if not (username taken)
     */
    public boolean createUser(UserLoginRegistrationDTO toCreate) {
        if (checkUsernamePasswordConstraints(toCreate.getUsername(), toCreate.getPassword()) && !this.repo.findByUserName(toCreate.getUsername()).isEmpty()) {
            return false;
        }
        char[] salt = generateSalt();
        this.repo
                .saveAndFlush(new User(null, toCreate.getUsername(), salt, hashPassword(toCreate.getPassword(), salt),
                        Date.valueOf(LocalDate.now()), null, null));
        return true;
    }

    /**
     * Checks if the username and the hashed password matches to an entry in the database
     *
     * @param toAuth User to authenticate, contains a username and a plain-text password
     * @return The authenticated User object if there is a match, null otherwise
     */
    public User authenticate(UserLoginRegistrationDTO toAuth) {
        List<User> result = this.repo.findByUserName(toAuth.getUsername());
        if (result.isEmpty()) {
            return null;
        }
        User user = result.get(0);
        return checkPassword(user, toAuth.getPassword()) ? user : null;
    }

    private boolean checkPassword(User user, char[] password) {
        char[] hash = hashPassword(password, user.getSalt());
        return Arrays.equals(user.getHashedPassword(), hash);
    }

    public void deleteUser(User user) {
        this.sessionService.deleteAllFromUser(user);
        this.repo.delete(user);
        this.repo.flush();
    }

    /**
     * Generates a 64 byte long salt using SecureRandom
     *
     * @return
     */
    private char[] generateSalt() {
        SecureRandom sr = new SecureRandom();
        byte[] values = new byte[64];
        sr.nextBytes(values);
        return Base64.getEncoder().encodeToString(values).toCharArray();
    }

    /**
     * Generates the SHA-256 hash of a password and a salt
     *
     * @param password
     * @param salt
     * @return
     */
    private char[] hashPassword(char[] password, char[] salt) {
        char[] result = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            for (char c : password) {
                md.update((byte) c);
            }
            for (char c : salt) {
                md.update((byte) c);
            }
            result = Base64.getEncoder().encodeToString(md.digest()).toCharArray();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return result;
    }

    private boolean checkUsernamePasswordConstraints(String username, char[] password) {
        return checkUsernameConstraints(username) && checkPasswordConstraints(password);
    }

    private boolean checkUsernameConstraints(String username) {
        return username != null && username.length() >= 3;
    }

    private boolean checkPasswordConstraints(char[] password) {
        return password != null && password.length >= 6;
    }
}