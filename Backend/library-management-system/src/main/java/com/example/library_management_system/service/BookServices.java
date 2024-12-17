package com.example.library_management_system.service;

import java.util.List;

import com.example.library_management_system.model.Book;

public interface BookServices {

	Book addBook(Book book);
	 public List<Book>  getBooks();
}
