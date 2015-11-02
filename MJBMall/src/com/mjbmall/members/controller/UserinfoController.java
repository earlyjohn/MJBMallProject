package com.mjbmall.members.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.*;
import com.opensymphony.xwork2.Action;

public class UserinfoController {
	private int member_id;
	private String nickname="";
	private int sex;
	private String birthday="";
	private String tall="";
	private String income="";
	private String address="";
	private String degree="";
	private String marry="";
	private String phone="";
	private String buyhouse="";
	private Map<String, Object> result=new HashMap<String, Object>();
	private int status=0;
	private MembersMapper membersMapper;
	
	
	public String saveUserinfo()
	{
	try{
		    result.clear();
			Userinfo userinfo=new Userinfo();
		    nickname=new String(nickname.getBytes("iso8859-1"),"utf-8");
		    address=new String(address.getBytes("iso8859-1"),"utf-8");
		    degree=new String(degree.getBytes("iso8859-1"),"utf-8");
		    marry=new String(marry.getBytes("iso8859-1"),"utf-8");
		    buyhouse=new String(buyhouse.getBytes("iso8859-1"),"utf-8");
			userinfo.setMember_id(member_id);
			userinfo.setNickname(nickname);
			userinfo.setSex(sex);
			userinfo.setBirthday(birthday);
			userinfo.setTall(tall);
			userinfo.setIncome(income); 
			userinfo.setAddress(address);
			userinfo.setDegree(degree);
			userinfo.setMarry(marry);
			userinfo.setPhone(phone);
			userinfo.setBuyhouse(buyhouse);
			
			membersMapper.updateUserinfo(userinfo);
			
			status=1;
			result.put("msg",status);
		}catch(Exception e){
			
		}
		return Action.SUCCESS;
	}
	public String getUserinfo()
	{
		try{
			Userinfo userinfo=new Userinfo();
			userinfo.setMember_id(member_id);
			List<Userinfo> userinfoList=membersMapper.getUserinfo(userinfo);
			result.put("userinfoList",userinfoList);
			
		}catch(Exception e){
			
		}
		return Action.SUCCESS;
	}
	
	public Map<String, Object> getResult() {
		return result;
	}
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}
	public void setNickname(String nickname) {
		
		this.nickname= nickname;
	
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public void setTall(String tall) {
		this.tall = tall;
	}
	public void setIncome(String income) {
		this.income = income;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public void setMarry(String marry) {
		this.marry = marry;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void setBuyhouse(String buyhouse) {
		this.buyhouse = buyhouse;
	}
	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}
	
}
