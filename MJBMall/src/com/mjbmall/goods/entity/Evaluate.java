package com.mjbmall.goods.entity;

public class Evaluate {
	private int goods_id;
	private String evaluate;
	private String username;
	private int star;
	private String pic_url;
	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goodsId) {
		goods_id = goodsId;
	}
	public String getEvaluate() {
		return evaluate;
	}
	public void setEvaluate(String evaluate) {
		this.evaluate = evaluate;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getStar() {
		return star;
	}
	public void setStar(int star) {
		this.star = star;
	}
	public String getPic_url() {
		return pic_url;
	}
	public void setPic_url(String pic_url) {
		this.pic_url = pic_url;
	}
	

}
