package com.uparttime.login.controller;

import com.opensymphony.xwork2.Action;
import com.uparttime.login.dao.LoginMapper;


public class loginController {
    private LoginMapper loginMapper;
    private String username="";
    private String password="";
    private String status;
    private int id;
	
	/**
	 * @return status
	 */
	public String getStatus() {
		return status;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String login(){
		if("".equals(username)||"".equals(password)){
			     status="3";
		}else{
			id=loginMapper.userLogin(username, password);
			if(id>0){
				status="0";
			}else{
				status="1";
			}
		}
		
		return Action.SUCCESS;
	}
	public int getId() {
		return id;
	}
	public void setLoginMapper(LoginMapper loginMapper) {
		this.loginMapper = loginMapper;
	}
}
