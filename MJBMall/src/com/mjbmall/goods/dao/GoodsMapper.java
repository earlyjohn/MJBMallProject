package com.mjbmall.goods.dao;

import java.util.List;

import com.mjbmall.goods.entity.*;
import com.mjbmall.orders.entity.CollectionShop;

public interface GoodsMapper {
    public List<Goods> getGoodsList(Goods goods);
    public List<Classify> getGoodsClassify(Classify classify);
    public List<Goods> getCollections(int id);
    public void addCollections(int user_id,int goods_id);
    public void delCollections(int user_id,int goods_id);
    public List<Shops> getShopsList(Shops shops);
    public void addCollectionsShop(int user_id,int shop_id);
    public List<Shops> getCollectionsShop(CollectionShop cs);
    public void delCollectionsShop(int user_id,int shop_id);
    public List<Goods> getGoodsSpecList(TypeOrderBy t);
    public List<Shops> getShopsSpecList(TypeOrderBy t);
    public List<Goods> findWatched(int user_id);
    public void addWatched(int user_id,int goods_id);
    public void delWatched(int user_id);
    public List<CrlAvg> findCrlAvg(CrlAvg ca);
    /**
     * 查询商品评价
     */
    public List<Evaluate> findEvaluate(Evaluate e);
	public List<Evaluate> findfirstEvaluate(Evaluate e);
    public int  findEvaluateCount(int goods_id);
    public int addEvaluateDetail(Evaluate e);
	//获取店铺粉丝数量
	 public int getFuns_num(int shop_id);
    /**
     * 用户选择的主页行业分类
     */
    public List<Integer> getUserGoodsClassify(Classify c);
    /**
     * 添加用户选择的分类排序
     */
    public void addUserGoodsClassify(int user_id,int cat_id);
}
