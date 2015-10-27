package com.mjbmall.members.controller;

import java.util.List;

import com.mjbmall.members.entity.Members;
import com.mjbmall.members.dao.MembersMapper;
import com.opensymphony.xwork2.Action;

public class MembersController {
	private MembersMapper membersMapper;
	private int member_id;
	private String name = "";
	List<Members> memberList = null;
	
	public String findMembers(){
		try{
			Members members = new Members();
			members.setMember_id(member_id);
			members.setName(name);
			memberList=membersMapper.getMembersList(members);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}
	public void setMembers_id(int member_id) {
		this.member_id = member_id;
	}
	public int getMembers_id() {
		return member_id;
	}
	public void  setName(String name){
		this.name = name;
	}
	public String getName(){
		return name;
	}
	public List<Members> getMembersList(){
		return memberList;
	}
}
