package com.mjbmall.goods.controller;


import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Shops;
import com.opensymphony.xwork2.Action;


public class ShopController {
	private GoodsMapper goodsMapper;
	private String shop_name;
	List<Shops> shopsList=null;
	private int shop_id=0;
	
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	public String findShops(){
		
			Shops shops = new Shops();
			shops.setShop_name(shop_name);
			shops.setShop_id(shop_id);
			shopsList=goodsMapper.getShopsList(shops);
		    
		return Action.SUCCESS;
	}
	public String findSpecShops(){
		try{
			shopsList=goodsMapper.getShopsSpecList();
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public void setGoodsMapper(GoodsMapper goodsMapper) {
		this.goodsMapper = goodsMapper;
	}
	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}
	public List<Shops> getShopsList() {
		return shopsList;
	}
	
	
	
	
	
}
