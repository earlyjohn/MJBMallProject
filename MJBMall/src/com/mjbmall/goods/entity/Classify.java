package com.mjbmall.goods.entity;

public class Classify {
    private int cat_id;
    private int parent_id;
    private String is_leaf;
    private String cat_name;
	/**
	 * @return cat_id
	 */
	public int getCat_id() {
		return cat_id;
	}
	/**
	 * @param cat_id 要设置的 cat_id
	 */
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	/**
	 * @return parent_id
	 */
	public int getParent_id() {
		return parent_id;
	}
	/**
	 * @param parent_id 要设置的 parent_id
	 */
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}
	/**
	 * @return is_leaf
	 */
	public String getIs_leaf() {
		return is_leaf;
	}
	/**
	 * @param is_leaf 要设置的 is_leaf
	 */
	public void setIs_leaf(String is_leaf) {
		this.is_leaf = is_leaf;
	}
	/**
	 * @return cat_name
	 */
	public String getCat_name() {
		return cat_name;
	}
	/**
	 * @param cat_name 要设置的 cat_name
	 */
	public void setCat_name(String cat_name) {
		this.cat_name = cat_name;
	}
    
}
