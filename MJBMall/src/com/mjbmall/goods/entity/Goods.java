package com.mjbmall.goods.entity;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class Goods {
	private int goods_id;
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
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getBrief() {
		return brief;
	}
	public void setBuy_count(int buy_count) {
		this.buy_count = buy_count;
	}
	public int getBuy_count() {
		return buy_count;
	}
	private int cat_id;
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	private String name;
	private BigDecimal price;
	private String big_pic; 
	private String brief;
	private int buy_count;
	private BigDecimal mktprice;
	private String intro;
	private String params;
	private String time;
	private int shop_id;
	private Timestamp beginTime;
	private Timestamp endTime;
	private BigDecimal newPrize;
	private int discount;
	private double distance;
	
	public double getDistance() {
		return distance;
	}
	public void setDistance(double distance) {
		this.distance = distance;
	}
	public int getShop_id() {
		return shop_id;
	}
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	/**
	 * @return time
	 */
	public String getTime() {
		return time;
	}
	/**
	 * @param time 要设置的 time
	 */
	public void setTime(String time) {
		this.time = time;
	}
	public BigDecimal getMktprice() {
		return mktprice;
	}
	public void setMktprice(BigDecimal mktprice) {
		this.mktprice = mktprice;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getParams() {
		return params;
	}
	public void setParams(String params) {
		this.params = params;
	}
	//shop
	private String shop_name;
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	private String address;
	private String phone_number;
	public String getShop_name() {
		return shop_name;
	}
	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	//排序标志
	private int orderBy;
	public void setOrderBy(int orderBy) {
		this.orderBy = orderBy;
	}
	public int getOrderBy() {
		return orderBy;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getType() {
		return type;
	}
	public Timestamp getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(Timestamp beginTime) {
		this.beginTime = beginTime;
	}
	public Timestamp getEndTime() {
		return endTime;
	}
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	public BigDecimal getNewPrize() {
		return newPrize;
	}
	public void setNewPrize(BigDecimal newPrize) {
		this.newPrize = newPrize;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	//促销类型
	private int type;
}