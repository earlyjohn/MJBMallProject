package com.uparttime.position.controller;

import java.util.List;


import com.opensymphony.xwork2.Action;
import com.uparttime.position.dao.PositionMapper;
import com.uparttime.position.entity.PositionDetails;

public class positionDetailsController {
    private PositionMapper positionMapper;
    private List<PositionDetails> list;
    private String id;
	public void setPositionMapper(PositionMapper positionMapper) {
		this.positionMapper = positionMapper;
	}
	public String positionDetails(){
		try{
			int pId = Integer.parseInt(id);
			list=positionMapper.findPositionDetails(pId);
		}catch(Exception e){
			list=null;
		}
		return Action.SUCCESS;
	}
	public List<PositionDetails> getList() {
		return list;
	}
	public void setId(String id) {
		this.id = id;
	}
}
