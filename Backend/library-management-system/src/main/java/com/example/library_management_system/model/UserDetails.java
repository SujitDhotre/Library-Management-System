package com.example.library_management_system.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "user_details")
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "transaction_id", unique = true, nullable = false)
    private String transactionId;

    @Column(name = "issue_date", nullable = false)
    private LocalDateTime issueDate;

    @Column(name = "return_due_date", nullable = false)
    private LocalDateTime returnDueDate;

    @OneToMany(mappedBy = "userDetails", cascade = CascadeType.ALL)
    private List<IssuedBookDetails> issuedBooks;

    public UserDetails() {}

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public LocalDateTime getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDateTime issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDateTime getReturnDueDate() {
        return returnDueDate;
    }

    public void setReturnDueDate(LocalDateTime returnDueDate) {
        this.returnDueDate = returnDueDate;
    }

    public List<IssuedBookDetails> getIssuedBooks() {
        return issuedBooks;
    }

    public void setIssuedBooks(List<IssuedBookDetails> issuedBooks) {
        this.issuedBooks = issuedBooks;
    }
}
