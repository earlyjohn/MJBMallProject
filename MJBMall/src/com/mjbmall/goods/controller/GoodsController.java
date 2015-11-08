package com.mjbmall.goods.controller;

import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Goods;
import com.opensymphony.xwork2.Action;


public class GoodsController {
    private GoodsMapper goodsMapper;
	private int goods_id=0;
	private int cat_id;
	private int user_id=0;
	private int shop_id=0;
	//排序标志位，1：人气最高，2：最新商品，3：离我最近
	private int orderBy=0;
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	List<Goods> goodsList=null;
	private String name="";
	private int type=0;
	/**
	 * @param type 要设置的 type
	 */
	public void setType(int type) {
		this.type = type;
	}
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
			goods.setCat_id(cat_id);
			goods.setShop_id(shop_id);
			goods.setOrderBy(orderBy);
			goodsList=goodsMapper.getGoodsList(goods);
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String findSpecGoods(){
		try{
			goodsList=goodsMapper.getGoodsSpecList(type);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public String addWatched(){
		try{
			goodsMapper.addWatched(user_id, goods_id);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public String delWatched(){
		try{
			goodsMapper.delWatched(user_id);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public String findWatched(){
		try{
			goodsList=goodsMapper.findWatched(user_id);
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
	public List<Goods> getGoodsList(){
		return goodsList;
	}
	/**
	 * @param user_id 要设置的 user_id
	 */
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public void setOrderBy(int orderBy) {
		this.orderBy = orderBy;
	}
}
