package com.mjbmall.orders.dao;

import java.util.List;

import com.mjbmall.orders.entity.Address;
import com.mjbmall.orders.entity.Carts;

public interface OrdersMapper {
    public List<Address> getAdrressList(int user_id);
    public List<Carts> getCart(int user_id);
    public void addCarts(int user_id,int goods_id);
    public void delCarts(int user_id,int goods_id);
    public void updateCarts(int count,int user_id,int goods_id);
    
}
