package com.mjbmall.goods.dao;

import java.util.List;

import com.mjbmall.goods.entity.Classify;
import com.mjbmall.goods.entity.Goods;
import com.mjbmall.goods.entity.Shops;

public interface GoodsMapper {
    public List<Goods> getGoodsList(Goods goods);
    public List<Classify> getGoodsClassify(Classify classify);
    public List<Goods> getCollections(int id);
    public void addCollections(int user_id,int goods_id);
    public void delCollections(int user_id,int goods_id);
    public List<Shops> getShopsList(Shops shops);

}
