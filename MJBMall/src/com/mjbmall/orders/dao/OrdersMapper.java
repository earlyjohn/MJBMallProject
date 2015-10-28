package com.mjbmall.orders.dao;

import java.util.List;

import com.mjbmall.orders.entity.Address;
import com.mjbmall.orders.entity.Carts;
import com.mjbmall.orders.entity.Reckoning;

public interface OrdersMapper {
    public List<Address> getAdrressList(Address add);
    public List<Carts> getCart(int user_id);
    public void addCarts(int user_id,int goods_id);
    public void delCarts(Carts carts);
    public void updateCarts(int count,int user_id,int goods_id);
    public void goreckoning(Reckoning r);
    public List<Carts> getreckoning(int user_id);
    public void addAddress(Address add);
    public void updateAddress(Address add);
    public void delAddress(int addressId);
    public void setAddressStatus(Address add);
    
}
