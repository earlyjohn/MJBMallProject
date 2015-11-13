package com.mjbmall.orders.entity;

public class Address {
	private int addressId;
	private int user_id;
	private String name;
	private String picker_dependent; 
	private String address;
    private String phone;
    private String gdphone;
    private String postcard;
    private int status;
    
    
	public String getPicker_dependent() {
		return picker_dependent;
	}
	public void setPicker_dependent(String picker_dependent) {
		this.picker_dependent = picker_dependent;
	}
	public String getGdphone() {
		return gdphone;
	}
	public void setGdphone(String gdphone) {
		this.gdphone = gdphone;
	}
	public String getPostcard() {
		return postcard;
	}
	public void setPostcard(String postcard) {
		this.postcard = postcard;
	}
	/**
	 * @return user_id
	 */
	public int getUser_id() {
		return user_id;
	}
	/**
	 * @param user_id 要设置的 user_id
	 */
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	/**
	 * @return addressId
	 */
	public int getAddressId() {
		return addressId;
	}
	/**
	 * @param addressId 要设置的 addressId
	 */
	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
