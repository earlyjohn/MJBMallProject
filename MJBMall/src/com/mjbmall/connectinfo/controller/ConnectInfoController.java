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
	private int info_id;
	private int parent_id = 0;

	public Map<String, Object> getResult() {
		return result;
	}

	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}

	public void setConnectInfoMapper(ConnectInfoMapper connectInfoMapper) {
		this.connectInfoMapper = connectInfoMapper;
	}

	public void setInfo_id(int info_id) {
		this.info_id = info_id;
	}

	public String findConnectInfoByCatId() {
		try {
			result.clear();
			List<Connectinfo> list = connectInfoMapper
					.getConnectInfoByCatId(parent_id);
			result.put("connectInfoList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	
	public String findConnectInfoByInfoId(){
		try {
			result.clear();
			List<Connectinfo> list = connectInfoMapper
					.getConnectInfoByInfoId(info_id);
			result.put("connectDetailInfoList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
}
