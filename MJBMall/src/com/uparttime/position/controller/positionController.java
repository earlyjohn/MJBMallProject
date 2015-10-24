package com.uparttime.position.controller;

import java.util.List;


import com.opensymphony.xwork2.Action;
import com.uparttime.position.dao.PositionMapper;
import com.uparttime.position.entity.Position;

public class positionController {
    private PositionMapper positionMapper;
    private int page;
    private int rows;
    private List<Position> list;
    /*HttpServletRequest request = ServletActionContext. getRequest(); */
	public void setPositionMapper(PositionMapper positionMapper) {
		this.positionMapper = positionMapper;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public void setRows(int rows) {
		this.rows = rows;
	}


	public String position(){
		page=(page-1)*rows;
		try{
			list=positionMapper.findPosition(page, rows);
		}catch(Exception e){
			list=null;
		}
		/*System.out.println(getIpAddr(request));*/
		
		return Action.SUCCESS;
	}
	public List<Position> getList() {
		return list;
	}
	/*public static String getIpAddr(HttpServletRequest request) { 
	    String ip = request.getHeader("x-forwarded-for"); 
	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
	        ip = request.getHeader("Proxy-Client-IP"); 
	    } 
	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
	        ip = request.getHeader("WL-Proxy-Client-IP"); 
	    } 
	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
	        ip = request.getRemoteAddr(); 
	    } 
	    return ip; 
	} */
}
