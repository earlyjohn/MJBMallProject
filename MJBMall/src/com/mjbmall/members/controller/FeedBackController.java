package com.mjbmall.members.controller;

import java.util.HashMap;
import java.util.Map;
import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.FeedBack;
import com.opensymphony.xwork2.Action;

public class FeedBackController {
	private MembersMapper membersMapper;
	private int member_id;
	private String date;
	private String content;
	private Map<String,Object> result=new HashMap<String,Object>();
	
	public String addFeedBack(){
		try{
			FeedBack feedBack = new FeedBack();
			feedBack.setMember_id(member_id);
			feedBack.setDate(date);
			feedBack.setContent(content);
			membersMapper.addFeedBack(feedBack);
			result.put("msg", "success");
		}catch (Exception e) {
			result.put("msg", "fail");
		}
		return Action.SUCCESS;
	}
	public void setMembersMapper(MembersMapper membersMapper){
		this.membersMapper = membersMapper;
	}
	public void setMember_id(int member_id){
		this.member_id = member_id;
	}
	public void setDate(String date){
		this.date = date;
	}
	public void setContent(String content){
		this.content = content;
	}
	public Map<String,Object> getResult() {
		return result;
	}
}
