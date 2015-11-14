package com.uparttime.login.dao;


import java.util.List;

import com.uparttime.login.entity.SysMsg;
public interface LoginMapper {
    public int userLogin(String username,String password);
    public void updateLastlogin(int id);
    public List<SysMsg> getSysMsgList(SysMsg s);
}
