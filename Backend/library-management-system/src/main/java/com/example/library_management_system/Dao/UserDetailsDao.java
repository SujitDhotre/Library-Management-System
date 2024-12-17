package com.example.library_management_system.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.library_management_system.model.UserDetails;

public interface UserDetailsDao extends JpaRepository<UserDetails, Long> {
    // Add custom query methods if needed
    UserDetails findByTransactionId(String transactionId);
}
