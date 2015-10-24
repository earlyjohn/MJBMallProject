package com.mjbmall.goods.controller;


import java.util.List;
import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Shops;
import com.opensymphony.xwork2.Action;


public class ShopController {
	private GoodsMapper goodsMapper;
	private String shop_name;
	List<Shops> shopsList=null;
	public String findShops(){
		
			Shops shops = new Shops();
			shops.setShop_name(shop_name);
			shopsList=goodsMapper.getShopsList(shops);
		    
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
