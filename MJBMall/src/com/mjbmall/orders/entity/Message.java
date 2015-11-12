package com.mjbmall.orders.entity;

public class Message {
	private int message_id;
	private int send_id;
	private int recv_id;
	private String msg;
	private String sendTime;
	private int status;
	private int type;
	private int user_id;
	private int shop_id;
	private int is_pingbi;
	private int is_read;

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getShop_id() {
		return shop_id;
	}

	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}

	public int getIs_pingbi() {
		return is_pingbi;
	}

	public void setIs_pingbi(int is_pingbi) {
		this.is_pingbi = is_pingbi;
	}

	public int getIs_read() {
		return is_read;
	}

	public void setIs_read(int is_read) {
		this.is_read = is_read;
	}

	public int getMessage_id() {
		return message_id;
	}

	public void setMessage_id(int messageId) {
		message_id = messageId;
	}

	public int getSend_id() {
		return send_id;
	}

	public void setSend_id(int sendId) {
		send_id = sendId;
	}

	public int getRecv_id() {
		return recv_id;
	}

	public void setRecv_id(int recvId) {
		recv_id = recvId;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getSendTime() {
		return sendTime;
	}

	public void setSendTime(String sendTime) {
		this.sendTime = sendTime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

}
