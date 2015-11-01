package com.mjbmall.orders.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.orders.dao.MessageMapper;
import com.mjbmall.orders.entity.Message;
import com.opensymphony.xwork2.Action;

public class MessageController {
	Map result = new HashMap();
	private MessageMapper messageMapper;
	private int recv_id=0;
	public String findNewMsg(){
		try{
			Message m = new Message();
			m.setRecv_id(recv_id);
			result.clear();
			messageMapper.getNewMsg(m);
			
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		return Action.SUCCESS;
	}
	public void setMessageMapper(MessageMapper messageMapper) {
		this.messageMapper = messageMapper;
	}
	public void setRecv_id(int recvId) {
		recv_id = recvId;
	}
	public Map getResult() {
		return result;
	}
}
