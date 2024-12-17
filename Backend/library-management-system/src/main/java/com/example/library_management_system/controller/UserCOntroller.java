package com.example.library_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.library_management_system.model.User;
import com.example.library_management_system.service.UserServices;

@RestController
@CrossOrigin
public class UserCOntroller {
	
	@Autowired
	private UserServices userServices;
	
	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return this.userServices.addUser(user);
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		
		return this.userServices.getUsers();
	}
}
