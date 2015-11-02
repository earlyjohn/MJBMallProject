package com.uparttime.register.controller;

import java.util.List;
import java.util.Random;

import com.mjbmall.util.SDKSend;
import com.opensymphony.xwork2.Action;
import com.uparttime.register.dao.RegisterMapper;
import com.uparttime.register.entity.CodeMsg;

public class registerController {
    private RegisterMapper registerMapper;
    private String username="";
    private String password="";
    private String phone="";
    private int register;
    private String status;
    private String codeMsg;
	
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
	public String register(){
		try{
			if("".equals(username)||"".equals(password)||"".equals(phone)){
				status="3";
			}else{
				int countUsername=registerMapper.testUsername(username);
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
	public String addCodeMsg(){
		try{
			String str="";
			CodeMsg c = new CodeMsg();
			
            for(int i=0;i<6;i++){
            	str=str+(int)(Math.random()*10);
            }
			c.setPhone(phone);
			c.setCodeMsg(str);
			SDKSend.sendRegistMsg(str, phone);
			registerMapper.delCodeMsg(c);
			registerMapper.addCodeMsg(c);
	        status="0";
		}catch(Exception e){
			status="1";
			
		}
		
		
		return Action.SUCCESS;
	}
	public String findCodeMsg(){
		try{
			
			CodeMsg c = new CodeMsg();
			
			c.setPhone(phone);
			
			
			List<CodeMsg> list = registerMapper.findCodeMsg(c);
			if(codeMsg.equals(list.get(0).getCodeMsg())){
				status="0";
			}else{
				status="1";
			}
	        
		}catch(Exception e){
			status="2";
			
		}
		
		
		return Action.SUCCESS;
	}
	public String updatePwd(){
		try{
			registerMapper.updatePwd(username, password);
			status="0";
			
		}catch(Exception e){
			status="1";
			
		}
		
		
		return Action.SUCCESS;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setCodeMsg(String codeMsg) {
		this.codeMsg = codeMsg;
	}

}
