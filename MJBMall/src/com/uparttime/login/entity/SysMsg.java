package com.uparttime.login.entity;

import java.sql.Timestamp;

public class SysMsg {
	private int user_id;
	private int msg_id;
	private String msg;
	private Timestamp sendTime;
	public int getMsg_id() {
		return msg_id;
	}
	public void setMsg_id(int msgId) {
		msg_id = msgId;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Timestamp getSendTime() {
		return sendTime;
	}
	public void setSendTime(Timestamp sendTime) {
		this.sendTime = sendTime;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getUser_id() {
		return user_id;
	}

}
