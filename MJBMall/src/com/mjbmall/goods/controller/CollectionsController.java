package com.mjbmall.goods.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Goods;
import com.opensymphony.xwork2.Action;


public class CollectionsController {
    private GoodsMapper goodsMapper;
	private int user_id=0;
	private int goods_id=0;
	private Map<String,Object> result=new HashMap<String,Object>();
	private List<Goods> list=null;
	/**
	 * @return status
	 */
	
	public String findCollections(){
		try{
			list=goodsMapper.getCollections(user_id);
			result.put("goodsList", list);
		}catch(Exception e){
			System.out.println(e.toString());
		}
		
		return Action.SUCCESS;
	}
	public String addCollections(){
		try{
			goodsMapper.addCollections(user_id, goods_id);
			result.put("msg", "success");
		}catch(Exception e){
			System.out.println(e.toString());
			result.put("msg", "fail");
		}
		
		return Action.SUCCESS;
	}
	public String delCollections(){
		try{
			goodsMapper.delCollections(user_id, goods_id);
			result.put("msg", "success");
		}catch(Exception e){
			System.out.println(e.toString());
			result.put("msg", "fail");
		}
		
		return Action.SUCCESS;
	}
	public void setGoodsMapper(GoodsMapper goodsMapper) {
		this.goodsMapper = goodsMapper;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public Map<String,Object> getResult() {
		return result;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
}
