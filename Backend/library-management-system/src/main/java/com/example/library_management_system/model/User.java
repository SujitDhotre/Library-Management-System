package com.example.library_management_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String f_name;
	private String m_name;
	private String l_name;
	private String mob;
	private String type;
	private String email;
	
	public User() {}
	
	public User(Long id, String f_name, String m_name, String l_name, String mob, String type, String email) {
		super();
		this.id = id;
		this.f_name = f_name;
		this.m_name = m_name;
		this.l_name = l_name;
		this.mob = mob;
		this.type = type;
		this.email = email;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getF_name() {
		return f_name;
	}
	public void setF_name(String f_name) {
		this.f_name = f_name;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public String getL_name() {
		return l_name;
	}
	public void setL_name(String l_name) {
		this.l_name = l_name;
	}
	public String getMob() {
		return mob;
	}
	public void setMob(String mob) {
		this.mob = mob;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", f_name=" + f_name + ", m_name=" + m_name + ", l_name=" + l_name + ", mob=" + mob
				+ ", type=" + type + ", email=" + email + "]";
	}
	
}
