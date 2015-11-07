package com.mjbmall.members.entity;

public class RecentlyBrowse {
	private int id;
	private int member_id;
	private int goods_id;
	private String name;
	private String browsedate;
	private String small_pic;
	private String brief;
	private float current_price;
	private float price;
	private int distance;
	public void setId(int id){
		this.id = id;
	}
	public int getId(){
		return id;
	}
	public void setMember_id(int member_id){
		this.member_id = member_id;
	}
	public int getMemebr_id(){
		return member_id;
	}
	public void setGoods_id(int goods_id){
		this.goods_id = goods_id;
	}
	public int getGoods_id(){
		return goods_id;
	}
	public void setName(String name){
		this.name = name;
	}
	public String getName(){
		return name;
	}
	public void setBrowsedate(String browsedate){
		this.browsedate = browsedate;
	}
	public String getBrowsedate(){
		return browsedate;
	}
	public void setSmall_pic(String small_pic){
		this.small_pic = small_pic;
	}
	public String getSmall_pic(){
		return small_pic;
	}
	public void setBrief(String brief){
		this.brief = brief;
	}
	public String getBrief(){
		return brief;
	}
	public void setCurrent_price(float current_pice){
		this.current_price = current_pice;
	}
	public float getCurrent_price(){
		return current_price;
	}
	public void setPrice(float price){
		this.price = price;
	}
	public float getPrice(){
		return price;
	}
	public void setDistance(int distance){
		this.distance = distance;
	}
	public int getDistance(){
		return distance;
	}
}
