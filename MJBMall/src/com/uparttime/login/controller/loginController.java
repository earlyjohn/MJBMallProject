package com.uparttime.login.controller;

import java.util.List;

import com.opensymphony.xwork2.Action;
import com.uparttime.login.dao.LoginMapper;
import com.uparttime.login.entity.SysMsg;


public class loginController {
    private LoginMapper loginMapper;
    private String username="";
    private String password="";
    private String status;
    private int id=0;
    private List<SysMsg> sysMsg;
	
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
			try{
				SysMsg s = new SysMsg();
				
				id=loginMapper.userLogin(username, password);
				s.setUser_id(id);
				
				sysMsg = loginMapper.getSysMsgList(s);
				loginMapper.updateLastlogin(id);
			}catch(Exception e){
				System.out.println(e);
			}
			
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
	public List<SysMsg> getSysMsg() {
		return sysMsg;
	}
}
