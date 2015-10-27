package com.mjbmall.members.entity;


public class Messages {
	private int msg_id;
	//回复哪个信件的ID
	private int for_id;
	private int from_id;
	private String from_uname;
	private int from_type;
	private int to_id;
	private String to_uname;
	private String subject;
	private String content;
	private int create_time;
	private int to_time;
	private String has_read;
	
	public void setMsg_id(int msg_id){
		this.msg_id = msg_id;
	}
	public int getMsg_id(){
		return msg_id;
	}
	public void setFor_id(int for_id){
		this.for_id = for_id;
	}
	public int getFor_id(){
		return for_id;
	}
	public void setFrom_id(int from_id){
		this.from_id = from_id;
	}
	public int getFrom_id(){
		return from_id;
	}
	public void setFrom_uname(String from_uanme){
		this.from_uname = from_uanme;
	}
	public String getFrom_uname(){
		return from_uname;
	}
	public void setFrom_type(int from_type){
		this.from_type = from_type;
	}
	public int getFrom_type(){
		return from_type;
	}
	public void setTo_id(int to_id){
		this.to_id = to_id;
	}
	public int getTo_id(){
		return to_id;
	}
	public void setTo_uname(String to_uname){
		this.to_uname = to_uname;
	}
	public String getTo_uname(){
		return to_uname;
	}
	public void setSubject(String subject){
		this.subject = subject;
	}
	public String getSubject(){
		return subject;
	}
	public void setContent(String content){
		this.content = content;
	}
	public String getContent(){
		return content;
	}
	public void setCreate_time(int create_time){
		this.create_time = create_time;
	}
	public int getCreate_time(){
		return create_time;
	}
	public void setTo_time(int to_time){
		this.to_time = to_time;
	}
	public int getTo_time(){
		return to_time;
	}
	public void setHas_read(String has_read){
		this.has_read = has_read;
	}
	public String getHas_read(){
		return has_read;
	}
}
