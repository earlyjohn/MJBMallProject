package com.uparttime.searchproduct.controller;

import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Goods;
import com.opensymphony.xwork2.Action;
import com.uparttime.login.dao.LoginMapper;
import com.uparttime.searchproduct.dao.SearchProductMapper;

public class SearchProductController {
    private SearchProductMapper searchProductMapper;
    private String keyword;
	private int goods_id=0;
	List<Goods> goodsList=null;
	public String searchProduct(){
		try{
			setSearchProductMapper(searchProductMapper);
			goods_id=searchProductMapper.submitProduct(keyword);
			
		}catch(Exception e){
		
		}
		return Action.SUCCESS;
	}
	public void setSearchProductMapper(SearchProductMapper searchProductMapper) {
		this.searchProductMapper = searchProductMapper;
	}
}