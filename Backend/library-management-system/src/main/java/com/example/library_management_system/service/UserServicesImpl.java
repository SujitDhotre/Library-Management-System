package com.example.library_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.library_management_system.Dao.UserDao;
import com.example.library_management_system.model.User;

@Service
public class UserServicesImpl implements UserServices {

    @Autowired
    private UserDao userDao;

    @Override
    public User addUser(User user) {
        userDao.save(user);
        return user;
    }

	@Override
	public List<User> getUsers() {
		return userDao.findAll();
		
	}
}
