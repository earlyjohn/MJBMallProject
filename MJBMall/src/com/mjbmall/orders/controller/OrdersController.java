package com.mjbmall.orders.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.orders.dao.OrdersMapper;
import com.mjbmall.orders.entity.Address;
import com.mjbmall.orders.entity.Carts;
import com.opensymphony.xwork2.Action;


public class OrdersController {
    private OrdersMapper ordersMapper;
	private Map<String,Object> result=new HashMap<String,Object>();
	private int user_id=0;
	private int goods_id=0;
	
	public String findAddress(){
		try{
			List<Address> list = ordersMapper.getAdrressList(user_id);
			result.put("addressList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String findCarts(){
		try{
			List<Carts> list = ordersMapper.getCart(user_id);
			result.put("cartsList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String addCarts(){
		try{
		    ordersMapper.addCarts(user_id, goods_id);
			
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
}
