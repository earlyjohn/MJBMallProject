package com.mjbmall.orders.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.orders.dao.MessageMapper;
import com.mjbmall.orders.entity.Message;
import com.opensymphony.xwork2.Action;

public class MessageController {
	Map<String,Object> result = new HashMap<String,Object>();
	private MessageMapper messageMapper;
	private int recv_id=0;
	private int send_id=0;
	private String msg="";
	private int status=1;
	private int type=1;
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
