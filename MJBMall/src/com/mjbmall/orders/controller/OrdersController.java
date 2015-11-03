package com.mjbmall.orders.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mjbmall.goods.entity.Goods;
import com.mjbmall.orders.dao.OrdersMapper;
import com.mjbmall.orders.entity.Address;
import com.mjbmall.orders.entity.Carts;
import com.mjbmall.orders.entity.Order;
import com.mjbmall.orders.entity.Reckoning;
import com.opensymphony.xwork2.Action;

/**
 * 
 * @author ZZ
 * 
 */
/**
 * @author Administrator
 *
 */
public class OrdersController {
	private OrdersMapper ordersMapper;
	private Map<String, Object> result = new HashMap<String, Object>();
	private int user_id = 0;
	private int goods_id = 0;
	private int count = 0;
	private String recGoodsId = "";
	private String name = "";
	private String phone = "";
	private String address = "";
	private int addressId = 0;
	private String goods_ids = "";
	private int shop_id = 0;
	private int status;

	private int order_id = 0;
	private String order_status;
	private String order_time;
	private String order_sum;
	private String pay_way;

	public String findAddress() {
		try {
			result.clear();
			Address add = new Address();
			add.setUser_id(user_id);
			add.setAddressId(addressId);
			add.setStatus(status);
			List<Address> list = ordersMapper.getAdrressList(add);
			result.put("addressList", list);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	public String findCarts() {
		try {
			result.clear();
			List<Carts> list = ordersMapper.getCart(user_id);
			result.put("cartsList", list);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	public String addCarts() {
		try {
			ordersMapper.addCarts(user_id, goods_id, 1, shop_id);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	public String delCarts() {
		try {
			String[] str = goods_ids.split(",");
			int[] goodsIds = new int[str.length];
			for (int i = 0; i < str.length; i++) {
				goodsIds[i] = Integer.parseInt(str[i]);
			}
			Carts c = new Carts();
			c.setGoodsIds(goodsIds);
			c.setUser_id(user_id);
			ordersMapper.delCarts(c);
			result.put("msg", "success");
		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	public String updateCarts() {
		try {
			ordersMapper.updateCarts(count, user_id, goods_id);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	public String goreckoning() {
		try {
			String[] str = recGoodsId.split(",");
			int[] goodsId = new int[str.length];
			for (int i = 0; i < str.length; i++) {
				goodsId[i] = Integer.parseInt(str[i]);
			}
			Reckoning r1 = new Reckoning();
			r1.setUser_id(user_id);
			r1.setReckoning(0);
			ordersMapper.goreckoning(r1);
			Reckoning r2 = new Reckoning();
			r2.setUser_id(user_id);
			r2.setReckoning(1);
			r2.setGoodsId(goodsId);
			ordersMapper.goreckoning(r2);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	/*
	 * 从结算表中（购物车表中）拿到已结算的商品列表数据
	 */
	public String findreckoning() {
		try {
			result.clear();
			List<Carts> list = ordersMapper.getreckoning(user_id);
			result.put("recList", list);

		} catch (Exception e) {
			System.out.println(e);
		}

		return Action.SUCCESS;
	}

	/*
	 * 点击结算按钮，将购物车中的选中商品的是否结算字段更改
	 * @author xuejx
	 */
	public String updateReckoning() {
		try {
			result.clear();
			Reckoning rk = new Reckoning();
			rk.setUser_id(user_id);
			rk.setGoods_id(goods_id);
			ordersMapper.setReckoning(user_id, goods_id);
			result.put("msg", "success");
		} catch (Exception e) {
			e.printStackTrace();
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	/*
	 * 提交订单，将商品信息，地址等信息都存进去 // 提交订单id和商品id的关联表中
	 * @author xuejx
	 */
	public String commitOrders() {
		try {
			Order order = new Order();
			order.setUser_id(user_id);
			order.setOrder_id(order_id);
			address = new String(address.getBytes("iso8859-1"), "UTF-8");
			order.setAddress(address);
			name = new String(name.getBytes("iso8859-1"), "UTF-8");
			order.setName(name);
			order.setPhone(phone);
			order.setOrder_status(order_status);
			order.setOrder_sum(order_sum);
			// order.setOrder_time(order_time);
			Order order1 = new Order();
			order1.setOrder_id(order_id);
			order1.setGoods_id(goods_id);
			ordersMapper.commitOrders(order);
			ordersMapper.commitOrdersGoods(order1);
			result.put("msg", "success");
		} catch (Exception e) {
			e.printStackTrace();
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	/*
	 * 根据订单编号拿到商品list
	 * @author xuejx
	 */
	public String findGoodsByOrderId() {
		try {
			result.clear();
			List<Goods> list=ordersMapper.getGoodsByOrderId(order_id);
			result.put("goodsList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return Action.SUCCESS;
	}

	/*
	 * 通过order_id拿到订单详情
	 * @author xuejx
	 */
	public String findOrderDetailByOrderId(){
		try {
			result.clear();
			List<Order> list=ordersMapper.getOrderDetailByOrderId(order_id);
			result.put("ordersList", list);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return Action.SUCCESS;
	}	
	/*
	 * 通过order_id删除订单
	 * @author xuejx
	 */
	public String delOrderByOrderId(){
		try {
			result.clear();
			if (order_id != 0) {
				ordersMapper.delOrderByOrderId(order_id);
				ordersMapper.delOrderGoodsByOrderId(order_id);
				result.put("msg", "success");
			} else {
				result.put("msg", "fail");
			}

		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}
		return Action.SUCCESS;
	}
	/*
	 * 根据user_id得到
	 * 
	 */
	public String addAddress() {
		try {
			result.clear();
			Address add = new Address();
			name = new String(name.getBytes("iso8859-1"), "utf-8");
			address = new String(address.getBytes("iso8859-1"), "utf-8");
			if (user_id != 0 && !name.equals("") && !phone.equals("")
					&& !address.equals("")) {
				add.setUser_id(user_id);
				add.setName(name);
				add.setPhone(phone);
				add.setAddress(address);
				ordersMapper.addAddress(add);
				System.out.println(name + " " + address);
				result.put("msg", "success");
			} else {
				result.put("msg", "fail");
			}

		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	public String updateAddress() {
		try {
			result.clear();
			Address add = new Address();
			name = new String(name.getBytes("iso8859-1"), "utf-8");
			address = new String(address.getBytes("iso8859-1"), "utf-8");
			if (!name.equals("") && !phone.equals("") && !address.equals("")
					&& addressId != 0) {
				add.setName(name);
				add.setPhone(phone);
				add.setAddress(address);
				add.setAddressId(addressId);
				ordersMapper.updateAddress(add);
				result.put("msg", "success");
			} else {
				result.put("msg", "fail");
			}

		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	public String delAddress() {
		try {
			result.clear();

			if (addressId != 0) {
				ordersMapper.delAddress(addressId);
				result.put("msg", "success");
			} else {
				result.put("msg", "fail");
			}

		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	public String setAddressStatus() {
		try {
			result.clear();

			Address add = new Address();
			add.setAddressId(0);
			add.setUser_id(user_id);
			add.setStatus(0);
			ordersMapper.setAddressStatus(add);
			add.setAddressId(addressId);
			add.setStatus(1);
			ordersMapper.setAddressStatus(add);
			result.put("msg", "success");

		} catch (Exception e) {
			System.out.println(e);
			result.put("msg", "fail");
		}

		return Action.SUCCESS;
	}

	public void setOrdersMapper(OrdersMapper ordersMapper) {
		this.ordersMapper = ordersMapper;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Map<String, Object> getResult() {
		return result;
	}

	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public void setRecGoodsId(String recGoodsId) {
		this.recGoodsId = recGoodsId;
	}

	/**
	 * @param name
	 *            要设置的 name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @param phone
	 *            要设置的 phone
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @param address
	 *            要设置的 address
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @param addressId
	 *            要设置的 addressId
	 */
	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public void setGoods_ids(String goods_ids) {
		this.goods_ids = goods_ids;
	}

	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}

	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}

	public void setOrder_time(String order_time) {
		this.order_time = order_time;
	}

	public void setOrder_sum(String order_sum) {
		this.order_sum = order_sum;
	}

	public void setPay_way(String pay_way) {
		this.pay_way = pay_way;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
}
