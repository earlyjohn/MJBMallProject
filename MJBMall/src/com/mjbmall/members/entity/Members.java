package com.mjbmall.members.entity;

public class Members {
	private int member_id;
	private String name;
	private String mobile;
	private String area;
	private String email;
	private String reg_ip;
	private int regtime;
	private int member_lv_id;
	
	public void setMember_id(int member_id){
		this.member_id = member_id;
	}
	public int getMember_id(){
		return member_id;
	}
	public void setName(String name){
		this.name = name;
	}
	public String getName(){
		return name;
	}
	public void setMobile(String mobile){
		this.mobile = mobile;
	}
	public String getMobile(){
		return mobile;
	}
	public void setEmail(String email){
		this.email = email;
	}
	public String getEmail(){
		return email;
	}
	public void setReg_ip(String reg_ip){
		this.reg_ip = reg_ip;
	}
	public String getReg_ip(){
		return reg_ip;
	}
	public void setArea(String area){
		this.area = area;
	}
	public String getArea(){
		return area;
	}
	public void setRegtime(int regtime){
		this.regtime = regtime;
	}
	public int getRegtime(){
		return regtime;
	}
	public void setMemberLvId(int member_lv_id){
		this.member_lv_id = member_lv_id;
	}
	public int getMemberLvId(){
		return member_lv_id;
	}
}
