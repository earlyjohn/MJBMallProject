package com.uparttime.register.dao;

import java.util.List;

import com.uparttime.register.entity.CodeMsg;

public interface RegisterMapper {
    public void addUser(String username,String password,String phone);
    public int testRegister(String username,String password);
    public int testUsername(String username);
    public void addCodeMsg(CodeMsg c);
    public void delCodeMsg(CodeMsg c);
    public List<CodeMsg> findCodeMsg(CodeMsg c);
    public void updatePwd(String username,String pwd);
}
