package com.mjbmall.connectinfo.dao;

import java.util.List;

import com.mjbmall.connectinfo.entity.Connectinfo;

public interface ConnectInfoMapper {

	public List<Connectinfo> getConnectInfoByCatId(int parent_id);

	public List<Connectinfo> getConnectInfoByInfoId(int info_id);
	
}
