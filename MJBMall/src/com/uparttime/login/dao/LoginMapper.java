package com.uparttime.login.dao;

public interface LoginMapper {
    public int userLogin(String username,String password);
    public void updateLastlogin(int id);
}
