package com.example.library_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.library_management_system.Dao.BookDao;
import com.example.library_management_system.model.Book;

@Service
public class BokServicesImpl implements BookServices {

	@Autowired
	private BookDao bookDao;
	
	@Override
	public Book addBook(Book book) {
		bookDao.save(book);
	        return book;
	}

	@Override
	public List<Book> getBooks() {
		return bookDao.findAll();
	}

}
