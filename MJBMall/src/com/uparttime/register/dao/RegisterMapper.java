package com.uparttime.register.dao;

import com.uparttime.register.entity.CodeMsg;

public interface RegisterMapper {
    public void addUser(String username,String password,String phone);
    public int testRegister(String username,String password);
    public int testUsername(String username);
    public void addCodeMsg(CodeMsg c);
    public void delCodeMsg(CodeMsg c);
}
