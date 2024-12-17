package com.example.library_management_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String book_name;
	private String author;
	private String price;
	private String qty;
	private String row_shell;
	
	
	public Book() {}
	
	
	
	public Book(long id, String book_name, String author, String price, String qty, String row_shell) {
		super();
		this.id = id;
		this.book_name = book_name;
		this.author = author;
		this.price = price;
		this.qty = qty;
		this.row_shell = row_shell;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getRow_shell() {
		return row_shell;
	}
	public void setRow_shell(String row_shell) {
		this.row_shell = row_shell;
	}
	
	@Override
	public String toString() {
		return "Book [id=" + id + ", book_name=" + book_name + ", author=" + author + ", price=" + price + ", qty="
				+ qty + ", row_shell=" + row_shell + "]";
	}
	
	
}
