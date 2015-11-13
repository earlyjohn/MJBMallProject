package com.mjbmall.connectinfo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.mjbmall.connectinfo.dao.ConnectInfoMapper;
import com.mjbmall.connectinfo.entity.Connectinfo;
import com.mjbmall.goods.entity.Goods;
import com.mjbmall.goods.entity.Shops;
import com.mjbmall.util.DistanceKM;
import com.opensymphony.xwork2.Action;

public class ConnectInfoController {
	private ConnectInfoMapper connectInfoMapper;
	private Map<String, Object> result = new HashMap<String, Object>();
	private int info_id;
	private int parent_id = 0;
	private double jingdu;
	private double weidu;
	private int shop_id;

	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}

	// 当前店铺的经纬度
	public void setJingdu(double jingdu) {
		this.jingdu = jingdu;
	}

	public void setWeidu(double weidu) {
		this.weidu = weidu;
	}

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

	public String findConnectInfoByInfoId() {
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

	/**
	 * 得到两点间距离
	 * @author xuejx
	 */

	public String findDistance() {
		try {
			result.clear();
			Shops shop = new Shops();
			shop.setShop_id(shop_id);
			List<Shops> list = connectInfoMapper.getJingWeiDu(shop);
			double shop_jingdu = list.get(0).getJingdu();
			double shop_weidu = list.get(0).getWeidu();
			double distance = DistanceKM.getDistance(jingdu, weidu,
					shop_jingdu, shop_weidu);
			result.put("distance", distance);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	public String findZuiJinShop(){
		try {
			result.clear();
			Shops shop=new Shops();
			shop.setShop_id(shop_id);
			List<Shops> list = connectInfoMapper.getJingWeiDu(shop);
			List<Shops> zuiJinList=new ArrayList<Shops>();
			for (int i = 0; i < list.size(); i++) {
				shop=list.get(i);
				double shop_jingdu = shop.getJingdu();
				double shop_weidu =shop.getWeidu();
				double distance = DistanceKM.getDistance(jingdu, weidu,
						shop_jingdu, shop_weidu);
				if(distance<300){
					shop.setDistance(distance);
					zuiJinList.add(shop);
				}
			}
			result.put("zuijinList", zuiJinList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	public String findZuiJinGoods(){
		try {
			result.clear();
			Shops shop=new Shops();
			Goods good=new Goods();
			shop.setShop_id(shop_id);
			List<Shops> shop_list = connectInfoMapper.getJingWeiDu(shop);
			List<Goods> zuiJinGoodsList=new ArrayList<Goods>();
			for (int i = 0; i < shop_list.size(); i++) {
				//得到当前店铺
				shop=shop_list.get(i);
				double shop_jingdu = shop.getJingdu();
				double shop_weidu =shop.getWeidu();
				//得到当前位置与该店铺的距离
				double distance = DistanceKM.getDistance(jingdu, weidu,
						shop_jingdu, shop_weidu);
				if(distance<300){
					//得到该店铺下的所有商品
					List<Goods> good_list=connectInfoMapper.getZuiJinGoods(shop);
					for (int j = 0; j < good_list.size(); j++) {
						good=good_list.get(j);
						good.setDistance(distance);
						zuiJinGoodsList.add(good);
					}
				}
			}
			result.put("zuijinGoodsList", zuiJinGoodsList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Action.SUCCESS;
	}
	
}
