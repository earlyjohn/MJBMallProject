package com.mjbmall.connectinfo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.mjbmall.connectinfo.dao.ConnectInfoMapper;
import com.mjbmall.connectinfo.entity.Connectinfo;
import com.opensymphony.xwork2.Action;

public class ConnectInfoController {
	private ConnectInfoMapper connectInfoMapper;
	private Map<String, Object> result = new HashMap<String, Object>();
	private int cat_id=0;
	private int info_id;
	
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	public void setInfo_id(int info_id) {
		this.info_id = info_id;
	}
	
	public String findConnectInfoByCatId(){
		try {
			result.clear();
			List<Connectinfo> list=connectInfoMapper.getConnectInfoByCatId(cat_id);
			result.put("connectInfoList",list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
}
