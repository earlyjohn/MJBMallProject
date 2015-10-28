package com.mjbmall.orders.entity;

public class CollectionShop {
    private int id;
	/**
	 * @return id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id 要设置的 id
	 */
	public void setId(int id) {
		this.id = id;
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
	 * @return goods_id
	 */
	public int getShop_id() {
		return shop_id;
	}
	/**
	 * @param goods_id 要设置的 goods_id
	 */
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	private int user_id;
    private int shop_id;
}
