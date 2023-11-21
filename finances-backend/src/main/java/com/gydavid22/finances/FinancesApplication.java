package com.gydavid22.finances;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinancesApplication {

    public static void main(String[] args) {
        SpringApplication.run(FinancesApplication.class, args);

//        for (String i : args) {
//            if (i.equalsIgnoreCase("--migration")) {
//                EntityManagerFactory emf = Persistence.createEntityManagerFactory("");
//                EntityManager em = emf.createEntityManager();
//
//                em.close();
//                emf.close();
//            }
//        }
    }

}
