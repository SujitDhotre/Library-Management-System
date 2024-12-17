package com.example.library_management_system.service;

import com.example.library_management_system.model.UserDetails;
import com.example.library_management_system.model.IssuedBookDetails;

import java.util.List;

public interface BookIssueService {

    String issueBooks(UserDetails userDetails, List<IssuedBookDetails> books);

    List<IssuedBookDetails> getBooksByTransactionId(String transactionId);

    UserDetails getUserByTransactionId(String transactionId);

    void markBookAsReturned(Long bookId);
}
