package com.mjbmall.members.controller;

import java.util.List;
import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.Messages;
import com.opensymphony.xwork2.Action;

public class MessagesController {
	private MembersMapper membersMapper;
	private int from_id;
	private List<Messages> messageslist = null;
	
	public String findMessages(){
		try{
			Messages messages = new Messages();
			messages.setFrom_id(from_id);
			messageslist = membersMapper.getMessagesList(messages);
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return Action.SUCCESS;
	}
	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}
	public void setFrom_id(int from_id){
		this.from_id = from_id;
	}
	public int getFrom_id(){
		return from_id;
	}
	public List<Messages> getMessagesList(){
		return messageslist;
	}
}
