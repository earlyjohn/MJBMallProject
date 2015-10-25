package com.mjbmall.orders.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.orders.dao.OrdersMapper;
import com.mjbmall.orders.entity.Address;
import com.mjbmall.orders.entity.Carts;
import com.mjbmall.orders.entity.Reckoning;
import com.opensymphony.xwork2.Action;


public class OrdersController {
    private OrdersMapper ordersMapper;
	private Map<String,Object> result=new HashMap<String,Object>();
	private int user_id=0;
	private int goods_id=0;
	private int count=0;
	private String recGoodsId="";
	
	public String findAddress(){
		try{
			result.clear();
			List<Address> list = ordersMapper.getAdrressList(user_id);
			result.put("addressList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String findCarts(){
		try{
			result.clear();
			List<Carts> list = ordersMapper.getCart(user_id);
			result.put("cartsList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String addCarts(){
		try{
		    ordersMapper.addCarts(user_id, goods_id,1,1);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String delCarts(){
		try{
		    ordersMapper.delCarts(user_id, goods_id);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String updateCarts(){
		try{
		    ordersMapper.updateCarts(count, user_id, goods_id);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	
	public String goreckoning(){
		try{
			String[] str=recGoodsId.split(",");
			int[] goodsId = new int[str.length] ;
			for(int i=0;i<str.length;i++){
				goodsId[i]=Integer.parseInt(str[i]);
			}
			Reckoning r1 = new Reckoning();
			r1.setUser_id(user_id);
			r1.setReckoning(0);
			ordersMapper.goreckoning(r1);
			Reckoning r2 = new Reckoning();
			r2.setUser_id(user_id);
			r2.setReckoning(1);
			r2.setGoodsId(goodsId);
		    ordersMapper.goreckoning(r2);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String findreckoning(){
		try{
			result.clear();
			List<Carts> list = ordersMapper.getreckoning(user_id);
			result.put("recList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public void setOrdersMapper(OrdersMapper ordersMapper) {
		this.ordersMapper = ordersMapper;
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
	public void setCount(int count) {
		this.count = count;
	}
	public void setRecGoodsId(String recGoodsId) {
		this.recGoodsId = recGoodsId;
	}
}
