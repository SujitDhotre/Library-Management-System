package com.example.library_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.library_management_system.model.Book;
import com.example.library_management_system.service.BookServices;

@RestController
@CrossOrigin
public class BookController {
		
		@Autowired
		private BookServices bookServices;
		
		
		@PostMapping("/book")
		public Book addBook(@RequestBody Book book) {
			return this.bookServices.addBook(book);
		}
		
		@GetMapping("/books")
		public List<Book> getUsers(){
			
			return this.bookServices.getBooks();
		}
		
}
