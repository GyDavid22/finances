package com.gydavid22.finances.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gydavid22.finances.dtos.UserLoginRegistrationDTO;
import com.gydavid22.finances.entities.User;
import com.gydavid22.finances.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User getById(Long id) {
        return this.repo.findById(id).get();
    }

    public List<User> getAll() {
        return this.repo.findAll();
    }

    public boolean createUser(UserLoginRegistrationDTO toCreate) {
        if (!this.repo.findByUserName(toCreate.getUserName()).isEmpty()) {
            return false;
        }
        char[] salt = generateSalt();
        this.repo
                .saveAndFlush(new User(null, toCreate.getUserName(), salt, hashPassword(toCreate.getPassword(), salt)));
        return true;
    }

    public boolean authenticate(UserLoginRegistrationDTO toAuth) {
        List<User> result = this.repo.findByUserName(toAuth.getUserName());
        if (result.isEmpty()) {
            return false;
        }
        User user = result.get(0);
        char[] hash = hashPassword(toAuth.getPassword(), user.getSalt());
        if (user.getHashedPassword().length != hash.length) {
            return false;
        }
        int i = 0, j = 0;
        while (i < user.getHashedPassword().length && j < hash.length) {
            if (user.getHashedPassword()[i++] != hash[j++]) {
                return false;
            }
        }
        return true;
    }

    private char[] generateSalt() {
        SecureRandom sr = new SecureRandom();
        byte[] values = new byte[16];
        sr.nextBytes(values);
        return Base64.getEncoder().encodeToString(values).toCharArray();
    }

    private char[] hashPassword(char[] password, char[] salt) {
        char[] result = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            for (int i = 0; i < password.length; i++) {
                md.update((byte) password[i]);
            }
            for (int i = 0; i < salt.length; i++) {
                md.update((byte) salt[i]);
            }
            result = Base64.getEncoder().encodeToString(md.digest()).toCharArray();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return result;
    }
}
