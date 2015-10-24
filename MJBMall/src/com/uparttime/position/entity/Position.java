package com.uparttime.position.entity;

public class Position {
    //职位id 
	private String id;
	//职位名称
    private String position;
    //薪资
    private String salary;
    //薪资单位
    private String date;
	/**
	 * @return id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id 要设置的 id
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return position
	 */
	public String getPosition() {
		return position;
	}
	/**
	 * @param position 要设置的 position
	 */
	public void setPosition(String position) {
		this.position = position;
	}
	/**
	 * @return salary
	 */
	public String getSalary() {
		return salary;
	}
	/**
	 * @param salary 要设置的 salary
	 */
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
}
