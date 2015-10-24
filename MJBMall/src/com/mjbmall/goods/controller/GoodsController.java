package com.mjbmall.goods.controller;

import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Goods;
import com.opensymphony.xwork2.Action;


public class GoodsController {
    private GoodsMapper goodsMapper;
	private int goods_id=0;
	List<Goods> goodsList=null;
	private String name="";
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return status
	 */
	
	public String findGoods(){
		try{
			Goods goods = new Goods();
			goods.setGoods_id(goods_id);
			goods.setName(name);
			goodsList=goodsMapper.getGoodsList(goods);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public void setGoodsMapper(GoodsMapper goodsMapper) {
		this.goodsMapper = goodsMapper;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
	public int getGoods_id() {
		return goods_id;
	}
	public List<Goods> getGoodsList(){
		return goodsList;
	}
}
