package com.uparttime.register.dao;

public interface RegisterMapper {
    public void addUser(String username,String password,String phone);
    public int testRegister(String username,String password);
    public int testUsername(String username);
}
