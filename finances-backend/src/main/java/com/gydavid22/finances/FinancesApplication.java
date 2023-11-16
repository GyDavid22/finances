package com.gydavid22.finances;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import jakarta.persistence.EntityManager;
// import jakarta.persistence.EntityManagerFactory;
// import jakarta.persistence.Persistence;

@SpringBootApplication
public class FinancesApplication {

    public static void main(String[] args) {
        SpringApplication.run(FinancesApplication.class, args);

        // EntityManagerFactory emf = Persistence.createEntityManagerFactory("emf");
        // EntityManager em = emf.createEntityManager();

        // em.close();
        // emf.close();
    }

}
