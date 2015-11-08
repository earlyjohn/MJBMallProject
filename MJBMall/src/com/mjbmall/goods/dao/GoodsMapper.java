package com.mjbmall.goods.dao;

import java.util.List;

import com.mjbmall.goods.entity.Classify;
import com.mjbmall.goods.entity.Goods;
import com.mjbmall.goods.entity.Shops;
import com.mjbmall.goods.entity.TypeOrderBy;
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
}
