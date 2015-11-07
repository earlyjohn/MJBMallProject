package com.mjbmall.members.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.members.entity.ContactUs;
import com.mjbmall.members.entity.Members;
import com.mjbmall.members.dao.MembersMapper;
import com.opensymphony.xwork2.Action;

public class MembersController {
	private MembersMapper membersMapper;
	private int member_id=0;
	private String birthday;
	private int salary;
	private String house;
	private String has_child;
	private int tall;
	private String mobile;
	private String addr;
	private String sex;
	private String wedlock;
	private String education;
	private String name = "";
	private Map<String,Object> result=new HashMap<String,Object>();
	List<Members> memberList = null;
	List<ContactUs> contactUs = null;
	
	
	public String findMembers(){
		try{
			Members members = new Members();
			members.setMember_id(member_id);
			members.setName(name);
			memberList=membersMapper.getMembersList(members);
			result.put("memberlist", memberList);
		}catch(Exception e){
			
		}
		
		return Action.SUCCESS;
	}
	public String updateMember(){
		try{
			Members members = new Members();
			members.setMember_id(member_id);
			members.setBirthday(birthday);
			members.setEducation(education);
			members.setHas_child(has_child);
			members.setHouse(house);
			members.setAddr(addr);
			members.setMobile(mobile);
			members.setName(name);
			members.setSalary(salary);
			members.setSex(sex);
			members.setTall(tall);
			members.setWedlock(wedlock);
			membersMapper.updateMember(members);
			result.put("msg", "success");
		}catch (Exception e) {
			System.out.println(e.toString());
			result.put("msg", "fail");
		}
		return Action.SUCCESS;
	}
	
	public String findAboutUs(){
		try{
			result.put("aboutus", membersMapper.getAboutUs());
		}catch (Exception e) {
			
		}
		return Action.SUCCESS;
	}
	
	public String findContactUs(){
		try{
			contactUs = membersMapper.getContactUsList();
			result.put("contact_us", contactUs);
		}catch (Exception e) {

		}
		return Action.SUCCESS;
	}
	
	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}
	public void  setName(String name){
		this.name = name;
	}
	public void setBirthday(String birthday){
		this.birthday = birthday;
	}
	public void setSalary(int salary){
		this.salary = salary;
	}
	public void setHouse(String house){
		this.house = house;
	}
	public void setHas_child(String has_child){
		this.has_child = has_child;
	}
	public void setTall(int tall){
		this.tall = tall;
	}
	public void setSex(String sex){
		this.sex = sex;
	}
	public void setWedlock(String wedlock){
		this.wedlock =wedlock;
	}
	public void setEducation(String education){
		this.education = education;
	}
	public void setAddr(String addr){
		this.addr = addr;
	}
	public void setMobile(String mobile){
		this.mobile = mobile;
	}
	public Map<String,Object> getResult() {
		return result;
	}
}
