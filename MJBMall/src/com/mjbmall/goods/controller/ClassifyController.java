package com.mjbmall.goods.controller;

import java.util.List;

import com.mjbmall.goods.dao.GoodsMapper;
import com.mjbmall.goods.entity.Classify;
import com.opensymphony.xwork2.Action;


public class ClassifyController {
    private GoodsMapper goodsMapper;
	private List<Classify> clssifyList=null;
	private int parent_id;
	private int user_id;
	private List<Integer> userChoose = null;
	private int cat_id;
	
	public String findClassify(){
		try{
			Classify classify =new Classify();
			classify.setParent_id(parent_id);
			clssifyList = goodsMapper.getGoodsClassify(classify);
			
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	/**
	 * 用户选择的主页显示的行业分类
	 * @param goodsMapper
	 */
	public String findUserGoodsClassify(){
		try{
			Classify classify =new Classify();
			classify.setUser_id(user_id);
			classify.setParent_id(parent_id);
			userChoose = goodsMapper.getUserGoodsClassify(classify);
			clssifyList = goodsMapper.getGoodsClassify(classify);
			
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public String addUserGoodsClassify(){
		try{
			goodsMapper.addUserGoodsClassify(user_id, cat_id);
			
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
	/**
	 * @param user_id 要设置的 user_id
	 */
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public List<Integer> getUserChoose() {
		return userChoose;
	}
	/**
	 * @param cat_id 要设置的 cat_id
	 */
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
}
