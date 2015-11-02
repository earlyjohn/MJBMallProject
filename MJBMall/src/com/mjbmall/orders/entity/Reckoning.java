package com.mjbmall.orders.entity;

public class Reckoning {
     private int user_id;
     private int[] goodsId;
     private int reckoning;
     private int goods_id;
     
	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int userId) {
		user_id = userId;
	}
	public int[] getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(int[] goodsId) {
		this.goodsId = goodsId;
	}
	public int getReckoning() {
		return reckoning;
	}
	public void setReckoning(int reckoning) {
		this.reckoning = reckoning;
	}
}
