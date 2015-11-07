package com.mjbmall.members.entity;

public class FeedBack {
	private int id;
	private int member_id;
	private String date;
	private String content;
	
	public void setId(int id){
		this.id = id;
	}
	public int getId(){
		return id;
	}
	public void setMember_id(int member_id){
		this.member_id = member_id;
	}
	public int getMember_id(){
		return member_id;
	}
	public void setDate(String date){
		this.date = date;
	}
	public String getDate(){
		return date;
	}
	public void setContent(String content){
		this.content = content;
	}
	public String getContent(){
		return content;
	}
}
