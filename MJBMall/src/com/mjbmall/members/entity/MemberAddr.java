package com.mjbmall.members.entity;

public class MemberAddr {
	private int addr_id;
	private int member_id;
	private String name;
	private String lastname;
	private String firstname;
	private String area;
	private String addr;
	private String zip;
	private String tel;
	private String mobile;
	private String day;
	private String time;
	private int def_addr;
	public void setAddr_id(int addr_id){
		this.addr_id = addr_id;
	}
	public int getAddr_id(){
		return addr_id;
	}
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
	
	public void setLastname(String lastname){
		this.lastname = lastname;
	}
	public String getLastName(){
		return lastname;
	}
	public void setFirstname(String firstname){
		this.firstname = firstname;
	}
	public String getFirstname(){
		return firstname;
	}
	public void setArea(String area){
		this.area = area;
	}
	public String getArea(){
		return area;
	}
	public void setAddr(String addr){
		this.addr = addr;
	}
	public String getAddr(){
		return addr;
	}
	public void setZip(String zip){
		this.zip = zip;
	}
	public String getZip(){
		return zip;
	}
	public void setTel(String tel){
		this.tel = tel;
	}
	public String getTel(){
		return tel;
	}
	public void setMobile(String mobile){
		this.mobile = mobile;
	}
	public String getMobile(){
		return mobile;
	}
	public void setDay(String day){
		this.day = day;
	}
	public String getDay(){
		return day;
	}
	public void setTime(String time){
		this.time = time;
	}
	public String getTime(){
		return time;
	}
	public void setDef_addr(int def_addr){
		this.def_addr = def_addr;
	}
	public int getDef_addr(){
		return def_addr;
	}
}
