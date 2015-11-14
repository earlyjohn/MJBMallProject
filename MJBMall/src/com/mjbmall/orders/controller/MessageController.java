package com.mjbmall.orders.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.goods.entity.Goods;
import com.mjbmall.orders.dao.MessageMapper;
import com.mjbmall.orders.entity.Message;
import com.mjbmall.orders.entity.Order;
import com.opensymphony.xwork2.Action;

public class MessageController {
	Map<String,Object> result = new HashMap<String,Object>();
	private MessageMapper messageMapper;
	private int recv_id=0;
	private int send_id=0;
	private String msg="";
	private int status=1;
	private int type=1;
	private int user_id=0;
	private int shop_id=0;
	private int is_read=0;
	private int message_id=0;
	private int order_id=0;
	private String order_status;
	
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}
	public void setMessage_id(int message_id) {
		this.message_id = message_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	public void setIs_read(int is_read) {
		this.is_read = is_read;
	}
	/**
	 * @param status 要设置的 status
	 */
	public void setStatus(int status) {
		this.status = status;
	}
	public String findNewMsg(){
		try{
			Message m = new Message();
			m.setRecv_id(recv_id);
			m.setSend_id(send_id);
			m.setStatus(status);
			m.setType(type);
			result.clear();
			List<Message> list = messageMapper.getNewMsg(m);
			int[] ids = new int[list.size()];
			for(int i=0;i<list.size();i++){
				ids[i]=list.get(i).getMessage_id();
			}
			if(list!=null&&list.size()>0){
				messageMapper.updateMsgStatus(ids);
			}
			result.put("msgList", list);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public String addMsg(){
		try{
			Message m = new Message();
			m.setRecv_id(recv_id);
			m.setSend_id(send_id);
			m.setMsg(msg);
			m.setType(type);
			messageMapper.addMsg(m);
			
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	
	public String findMsg(){
		try {
			result.clear();
			Message m=new Message();
			m.setUser_id(user_id);
			m.setShop_id(shop_id);
			List<Message> list = messageMapper.getMsg(m);
			result.put("systemMessageList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	
	public String findNoReadMsgNum(){
		try {
			Message m=new Message();
			m.setUser_id(user_id);
			int count=messageMapper.getNoMsgNum(m);
			result.put("noReadNum", count);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	
	public String findMsgByShopToUser(){
		try {
			result.clear();
			Message m=new Message();
			m.setUser_id(user_id);
			List<Message> list = messageMapper.getMsgByShopToUser(m);
			result.put("shopMessageList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	
	public String changeMsgIsRead(){
		try {
			Message m=new Message();
			m.setUser_id(user_id);
			m.setMessage_id(message_id);
			m.setType(type);
			messageMapper.setMsgIsRead(m);
			result.put("msg", "success");
		} catch (Exception e) {
			e.printStackTrace();
			result.put("msg", "success");
		}
		return Action.SUCCESS;
	}
	
	public String changeMsgIsPingBi(){
		try {
			Message m=new Message();
			m.setUser_id(user_id);
			m.setType(type);
			messageMapper.setMsgIsPingBi(m);
			result.put("msg", "success");
		} catch (Exception e) {
			e.printStackTrace();
			result.put("msg", "success");
		}
		return Action.SUCCESS;
	}
	
	public 	String findOrderMsg(){
		try {
			result.clear();
			Order order=new Order();
			order.setUser_id(user_id);
			order.setOrder_status(order_status);
			List<Order> order_list=messageMapper.getOrderMsg(order);
			Order temp_order=new Order();
			List result_list=new ArrayList();
			for (int i = 0; i < order_list.size(); i++) {
				temp_order=order_list.get(i);
				order_id=temp_order.getOrder_id();
				Order order1=new Order();
				order1.setUser_id(user_id);
				order1.setOrder_status(order_status);
				List<Goods> goods_list=messageMapper.getOrderGoodsMsg(order1);
				temp_order.setGoods_list(goods_list);
				result_list.add(temp_order);
			}
			result.put("orderMsgList", result_list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	public void setMessageMapper(MessageMapper messageMapper) {
		this.messageMapper = messageMapper;
	}
	public void setRecv_id(int recvId) {
		recv_id = recvId;
	}
	public Map<String,Object> getResult() {
		return result;
	}
	/**
	 * @param send_id 要设置的 send_id
	 */
	public void setSend_id(int send_id) {
		this.send_id = send_id;
	}
	/**
	 * @param msg 要设置的 msg
	 */
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public void setType(int type) {
		this.type = type;
	}
}
