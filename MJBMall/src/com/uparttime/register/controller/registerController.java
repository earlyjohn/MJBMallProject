package com.uparttime.register.controller;

import com.opensymphony.xwork2.Action;
import com.uparttime.register.dao.RegisterMapper;

public class registerController {
    private RegisterMapper registerMapper;
    private String username="";
    private String password="";
    private String phone="";
    private int register;
    private int countUsername;
    private String status;
	
	/**
	 * @return status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @return register
	 */
	/*public int getRegister() {
		return register;
	}
*/
	/*public RegisterMapper getRegisterMapper() {
		return registerMapper;
	}*/

	public void setRegisterMapper(RegisterMapper registerMapper) {
		this.registerMapper = registerMapper;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String testphone()
	{
		try{
			status=null;
			
			int count=registerMapper.testPhone(phone);
			if(count==0)
				status="1";
			else 
				status="0";
			
		}catch(Exception e){
			status="2";
		}
		return Action.SUCCESS;
	}
	public String register(){
		try{
			if("".equals(username)||"".equals(password)||"".equals(phone)){
				status="3";
			}else{
				 countUsername=registerMapper.testUsername(username);
				 System.out.println(countUsername);
				 if(countUsername==0){
					registerMapper.addUser(username,password,phone);
					register=registerMapper.testRegister(username, password);
					if(register==1){
						status="0";
					}else{
						status="1";
					}
				}else{
					status="2";
				}
			}
		}catch(Exception e){
			status="2";
		}
		
		
		return Action.SUCCESS;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
