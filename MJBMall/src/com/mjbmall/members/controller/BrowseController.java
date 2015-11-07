package com.mjbmall.members.controller;

import java.util.List;

import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.RecentlyBrowse;
import com.opensymphony.xwork2.Action;

public class BrowseController {
	private MembersMapper membersMapper;
	private int member_id;
	List<RecentlyBrowse> recentlybrowseslist = null;
	
	public String findMemberBrowse(){
		try{
			recentlybrowseslist = membersMapper.getRecentlyBrowsesList(member_id);
		}catch (Exception e) {
			
		}
		return Action.SUCCESS;
	}
	
	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}
	public void setMembers_id(int member_id) {
		this.member_id = member_id;
	}
	public List<RecentlyBrowse> getRecentlyBrowsesList(){
		return recentlybrowseslist;
	}
}
