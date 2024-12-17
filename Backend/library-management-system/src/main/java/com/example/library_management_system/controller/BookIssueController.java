package com.example.library_management_system.controller;

import com.example.library_management_system.model.UserDetails;
import com.example.library_management_system.model.IssuedBookDetails;
import com.example.library_management_system.service.BookIssueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BookIssueController {

    @Autowired
    private BookIssueService bookIssueService;

    // Issue books to a user
    @PostMapping("/issue-books")
    public String issueBooks(@RequestBody UserDetails userDetails, @RequestBody List<IssuedBookDetails> books) {
        return this.bookIssueService.issueBooks(userDetails, books);
    }

    // Get all issued books for a specific transaction ID
    @GetMapping("/issued-books/{transactionId}")
    public List<IssuedBookDetails> getBooksByTransactionId(@PathVariable String transactionId) {
        return this.bookIssueService.getBooksByTransactionId(transactionId);
    }

    // Get user details by transaction ID
    @GetMapping("/user-details/{transactionId}")
    public UserDetails getUserByTransactionId(@PathVariable String transactionId) {
        return this.bookIssueService.getUserByTransactionId(transactionId);
    }

    // Mark a book as returned
    @PutMapping("/return-book/{bookId}")
    public String markBookAsReturned(@PathVariable Long bookId) {
        this.bookIssueService.markBookAsReturned(bookId);
        return "Book marked as returned successfully.";
    }
}
