package com.example.library_management_system.service;

import java.util.List;

import com.example.library_management_system.model.User;

public interface UserServices {
	
    User addUser(User user);
    
    public List<User>  getUsers();
    
}