package com.mjbmall.members.entity;


public class Comments {
	private int comment_id;
	private int for_comment_id;
	private int type_id;
	private int product_id;
	private int order_id;
	private String object_type;
	private int author_id;
	private String author;
	private String contact;
	private String mem_read_status;
	private String adm_read_status;
	private int time;
	private int lastreply;
	private int to_id;
	private String to_uname;
	private String title;
	private String comment;
	private String display;
	public void setComment_id(int comment_id){
		this.comment_id = comment_id;
	}
	public int getComment_id(){
		return comment_id;
	}
	public void setFor_Comment_Id(int for_comment_id){
		this.for_comment_id = for_comment_id;
	}
	public int getFor_Comment_Id(){
		return for_comment_id;
	}
	public void setType_id(int type_id){
		this.type_id = type_id;
	}
	public int getType_id(){
		return type_id;
	}
	public void setProduct_id(int product_id){
		this.product_id = product_id;
	}
	public int getProduct_id(){
		return product_id;
	}
	public void setOrder_id(int order_id){
		this.order_id = order_id;
	}
	public int getOrder_id(){
		return order_id;
	}
	public void setObject_type(String object_type){
		this.object_type = object_type;
	}
	public String getObject_type(){
		return object_type;
	}
	public void setAuthor_id(int author_id){
		this.author_id = author_id;
	}
	public int getAuthor_id(){
		return author_id;
	}
	public void setAuthor(String author){
		this.author = author;
	}
	public String getAuthor(){
		return author;
	}
	public void setContact(String contact){
		this.contact = contact;
	}
	public String getContact(){
		return contact;
	}
	public void setMem_read_status(String mem_read_status){
		this.mem_read_status = mem_read_status;
	}
	public String getMem_read_status(){
		return mem_read_status;
	}
	public void setAdm_read_status(String adm_read_status){
		this.adm_read_status = adm_read_status;
	}
	public String getAdm_read_status(){
		return adm_read_status;
	}
	public void setTime(int time){
		this.time = time;
	}
	public int getTime(){
		return time;
	}
	public void setLastReply(int lastreply){
		this.lastreply = lastreply;
	}
	public int getRestReply(){
		return lastreply;
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
	public void setTitle(String title){
		this.title = title;
	}
	public String getTitle(){
		return title;
	}
	public void setComment(String comment){
		this.comment = comment;
	}
	public String getComment(){
		return comment;
	}
	public void setDisplay(String display){
		this.display = display;
	}
	public String getDisplay(){
		return display;
	}
}
