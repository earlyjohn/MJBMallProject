package com.mjbmall.members.controller;

import java.util.List;

import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.MemberAddr;
import com.opensymphony.xwork2.Action;

public class MemberAddrController {
	private MembersMapper membersMapper;
	private int member_id;
	private List<MemberAddr> memberaddrslist;
	public String findMemberAddr(){
		try{
			MemberAddr memberAddr = new MemberAddr();
			memberAddr.setMember_id(member_id);
			memberaddrslist = membersMapper.getMemberAddrsList(memberAddr);
		}catch(Exception e){
			
		}
		return Action.SUCCESS;
	}
	public void setMembersMapper(MembersMapper mapper){
		this.membersMapper = mapper;
	}
	public void setMember_id(int member_id){
		this.member_id = member_id;
	}
	public int getMember_id(){
		return member_id;
	}
	public List<MemberAddr> getMemberAddr(){
		return memberaddrslist;
	}
}
