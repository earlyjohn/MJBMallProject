package com.mjbmall.goods.controller;

import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Classify;
import com.opensymphony.xwork2.Action;


public class ClassifyController {
    private GoodsMapper goodsMapper;
	private List<Classify> clssifyList=null;
	private int parent_id;
	
	public String findClassify(){
		try{
			Classify classify =new Classify();
			classify.setParent_id(parent_id);
			clssifyList = goodsMapper.getGoodsClassify(classify);
			
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public void setGoodsMapper(GoodsMapper goodsMapper) {
		this.goodsMapper = goodsMapper;
	}
	public List<Classify> getClassifyList(){
		return clssifyList;
	}
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}
}
