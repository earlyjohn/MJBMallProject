package com.mjbmall.goods.entity;

import java.math.BigDecimal;

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
	private String name;
	private BigDecimal price;
	private String big_pic; 
	private String brief;
	private int buy_count;
	private BigDecimal mktprice;
	private String intro;
	private String params;
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
}