package com.mjbmall.util;

public class DistanceKM {
	//地球半径
	public static final double R= 6371.004;
	/**
	 * 根据两地经纬度计算两地之间的经纬度，单位为KM
	 * @author xuejx
	 * @param jingdu1 	经度1 
     * @param weidu1  	纬度1 
     * @param jingdu2  	经度2 
     * @param weidu2  	纬度2 
     * @return  两地距离
     * 
	 */
	public static double getDistance(double jingdu1,double weidu1,double jingdu2,double weidu2){
		 	double x = changeToRad(jingdu1);  
	        double y = changeToRad(weidu1);  
	        double a = changeToRad(jingdu2);  
	        double b = changeToRad(weidu2);  
	        double rad = Math.acos(Math.cos(y) * Math.cos(b) * Math.cos(x - a) + Math.sin(y) * Math.sin(b));  
	        if (rad > Math.PI)  
	            rad = Math.PI * 2 - rad;  
	        return R * rad;  
	}
	
	/** 
     * 将角度转化为弧度 
     * @param angle 角度 
     * @return  弧度 
     */  
    public static double changeToRad(double angle)  
    {  
        return angle / 180 * Math.PI;  
	}
}
