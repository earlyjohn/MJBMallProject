package com.mjbmall.members.entity;

import java.sql.Date;



public class Userinfo {
	private int member_id;
	private String nickname;
	private int sex;
	private String birthday;
	private String tall;
	private String income;
	private String address;
	private String degree;
	private String marry;
	private String phone;
	private String buyhouse;

	private Date registertime;
	
	public String getRegistertime() {
		
		return  registertime.toString();
	}
	public void setRegistertime(Date registertime) {
		this.registertime = registertime;
	}
	public int getMember_id() {
		return member_id;
	}
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getTall() {
		return tall;
	}
	public void setTall(String tall) {
		this.tall = tall;
	}
	public String getIncome() {
		return income;
	}
	public void setIncome(String income) {
		this.income = income;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getMarry() {
		return marry;
	}
	public void setMarry(String marry) {
		this.marry = marry;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getBuyhouse() {
		return buyhouse;
	}
	public void setBuyhouse(String buyhouse) {
		this.buyhouse = buyhouse;
	}

}
