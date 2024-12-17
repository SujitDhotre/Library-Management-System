package com.example.library_management_system.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.library_management_system.model.IssuedBookDetails;

public interface IssuedBookDetailsDao extends JpaRepository<IssuedBookDetails, Long> {
    // Add custom query methods if needed
    // Example: Find all books issued for a specific transaction
    List<IssuedBookDetails> findByUserDetails_TransactionId(String transactionId);
}
