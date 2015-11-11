package com.mjbmall.goods.entity;

public class Shops {
	private int shop_id;
	private String shop_name;
	private String address;
	private String phone_number;
	private String shop_pic;
	private String credit_rating;
	private String shop_hours;
	private int orderBy;
	private int cat_id;
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	public int getShop_id() {
		return shop_id;
	}
	
	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}
	public String getShop_name() {
		return shop_name;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress() {
		return address;
	}
	
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getPhone_number() {
		return phone_number;
	}
	
	public void setCredit_rating(String credit_rating) {
		this.credit_rating = credit_rating;
	}
	public String getCredit_rating() {
		return credit_rating;
	}
	
	public void setShop_pic(String shop_pic) {
		this.shop_pic = shop_pic;
	}
	public String getShop_pic() {
		return shop_pic;
	}

	public void setShop_hours(String shop_hours) {
		this.shop_hours = shop_hours;
	}
	public String getShop_hours() {
		return shop_hours;
	}
	public int getOrderBy() {
		return orderBy;
	}
	public void setOrderBy(int orderBy) {
		this.orderBy = orderBy;
	}
	/**
	 * @return cat_id
	 */
	public int getCat_id() {
		return cat_id;
	}
	/**
	 * @param cat_id 要设置的 cat_id
	 */
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
}
