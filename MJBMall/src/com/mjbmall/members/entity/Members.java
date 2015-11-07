package com.mjbmall.members.entity;

public class Members {
	private int member_id;
	private String name;
	private String mobile;
	private String addr;
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
	public void setAddr(String addr){
		this.addr = addr;
	}
	public String getAddr(){
		return addr;
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
	public void setArea(String area){
		this.area = area;
	}
	public String getArea(){
		return area;
	}
	
	private String birthday;
	private int salary;
	private String house;
	private String has_child;
	private int tall;
	private String sex;
	private String wedlock;
	private String education;
	
	public void setBirthday(String birthday){
		this.birthday = birthday;
	}
	public String getBirthday(){
		return birthday;
	}
	public void setSalary(int salary){
		this.salary = salary;
	}
	public int getSalary(){
		return salary;
	}
	public void setHouse(String house){
		this.house = house;
	}
	public String getHouse(){
		return house;
	}
	public void setHas_child(String has_child){
		this.has_child = has_child;
	}
	public String getHas_child(){
		return has_child;
	}
	public void setTall(int tall){
		this.tall = tall;
	}
	public int getTall(){
		return tall;
	}
	public void setSex(String sex){
		this.sex = sex;
	}
	public String getSex(){
		return sex;
	}
	public void setWedlock(String wedlock){
		this.wedlock =wedlock;
	}
	public String getWedlock(){
		return wedlock;
	}
	public void setEducation(String education){
		this.education = education;
	}
	public String getEducation(){
		return education;
	}
}
