package com.mjbmall.orders.entity;

public class Message {
	private int message_id;
	private int send_id;
	private int recv_id;
	private String msg;
	private String sendTime;
	private int status;
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

}
