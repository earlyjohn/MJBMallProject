package com.mjbmall.orders.dao;

import java.util.List;

import com.mjbmall.goods.entity.Goods;
import com.mjbmall.orders.entity.Message;
import com.mjbmall.orders.entity.Order;

/**
 * @author Administrator
 * 
 */
public interface MessageMapper {
	public List<Message> getNewMsg(Message m);

	public void updateMsgStatus(int[] ids);

	public void addMsg(Message m);

	// 根据user_id或shop_id得到系统消息列表
	public List<Message> getMsg(Message m);

	// 根据user_id得到未读系统消息数
	public int getNoMsgNum(Message m);

	// 根据user_id得到店铺推送给用户的消息
	public List<Message> getMsgByShopToUser(Message m);

	// 设置user_id的系统消息已读
	public void setMsgIsRead(Message m);

	// 设置系统消息已读
	public void setMsgIsPingBi(Message m);

	// 得到订单小助手的商家已发货的订单消息
	public List<Order> getOrderMsg(Order order);

	// 根据订单得到对应的goodslist
	public List<Goods> getOrderGoodsMsg(Order order);
}
