package com.example.library_management_system.service;

import com.example.library_management_system.Dao.UserDetailsDao;
import com.example.library_management_system.Dao.IssuedBookDetailsDao;
import com.example.library_management_system.model.UserDetails;
import com.example.library_management_system.model.IssuedBookDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class BookIssueServiceImpl implements BookIssueService {

    @Autowired
    private UserDetailsDao userDetailsDao;

    @Autowired
    private IssuedBookDetailsDao issuedBookDetailsDao;

    @Override
    public String issueBooks(UserDetails userDetails, List<IssuedBookDetails> books) {
        // Generate a unique transaction ID
        String transactionId = UUID.randomUUID().toString();
        userDetails.setTransactionId(transactionId);
        userDetails.setIssueDate(LocalDateTime.now());
        userDetails.setReturnDueDate(LocalDateTime.now().plusDays(15)); // Example: 15-day issue period
        userDetailsDao.save(userDetails);

        // Save issued book details
        for (IssuedBookDetails book : books) {
            book.setUserDetails(userDetails);
            book.setReturned(false);
            issuedBookDetailsDao.save(book);
        }

        return transactionId;
    }

    @Override
    public List<IssuedBookDetails> getBooksByTransactionId(String transactionId) {
        return issuedBookDetailsDao.findByUserDetails_TransactionId(transactionId);
    }

    @Override
    public UserDetails getUserByTransactionId(String transactionId) {
        return userDetailsDao.findByTransactionId(transactionId);
    }

    @Override
    public void markBookAsReturned(Long bookId) {
        IssuedBookDetails book = issuedBookDetailsDao.findById(bookId).orElseThrow(
            () -> new RuntimeException("Book not found")
        );
        book.setReturned(true);
        issuedBookDetailsDao.save(book);
    }
}
