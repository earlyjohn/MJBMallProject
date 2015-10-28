package com.mjbmall.orders.entity;

public class Address {
    private String name;
    private String phone;
    private String address;
    private int status;
    private int user_id;
    private int addressId;
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
