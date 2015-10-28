package com.mjbmall.orders.entity;

import java.math.BigDecimal;

public class Carts {
	private int user_id;
	private int goods_id;
	private String name;
	private BigDecimal price;
	private String big_pic; 
	private BigDecimal mktprice;
	private String addTime;
	private String shop_id;
	private String shop_name;
	private int[] goodsIds;
	//private int reckoning;
	public String getShop_id() {
		return shop_id;
	}
	public void setShop_id(String shopId) {
		shop_id = shopId;
	}
	public String getShop_name() {
		return shop_name;
	}
	public void setShop_name(String shopName) {
		shop_name = shopName;
	}
	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goodsId) {
		goods_id = goodsId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getBig_pic() {
		return big_pic;
	}
	public void setBig_pic(String bigPic) {
		big_pic = bigPic;
	}
	public BigDecimal getMktprice() {
		return mktprice;
	}
	public void setMktprice(BigDecimal mktprice) {
		this.mktprice = mktprice;
	}
	public String getAddTime() {
		return addTime;
	}
	public void setAddTime(String addTime) {
		this.addTime = addTime;
	}
	/*public void setReckoning(int reckoning) {
		this.reckoning = reckoning;
	}
	public int getReckoning() {
		return reckoning;
	}*/
	public int[] getGoodsIds() {
		return goodsIds;
	}
	public void setGoodsIds(int[] goodsIds) {
		this.goodsIds = goodsIds;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
}
