package com.example.library_management_system.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.library_management_system.model.User;

public interface UserDao extends JpaRepository<User, Long>{

}
