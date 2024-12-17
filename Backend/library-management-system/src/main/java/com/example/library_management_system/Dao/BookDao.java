package com.example.library_management_system.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.library_management_system.model.Book;

public interface BookDao  extends JpaRepository<Book, Long> {

}
