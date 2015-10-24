package com.mjbmall.orders.dao;

import java.util.List;

import com.mjbmall.goods.entity.Classify;
import com.mjbmall.goods.entity.Goods;

public interface OrdersMapper {
    public List<Goods> getGoodsList(Goods goods);
    public List<Classify> getGoodsClassify(Classify classify);
    public List<Goods> getCollections(int id);
    public void addCollections(int user_id,int goods_id);
    public void delCollections(int user_id,int goods_id);
    
}
