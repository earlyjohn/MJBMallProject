package com.mjbmall.orders.dao;

import java.util.List;

import com.mjbmall.orders.entity.Message;

public interface MessageMapper {
    public List<Message> getNewMsg(Message m);
    
}
