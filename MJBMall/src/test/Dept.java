package test;
/**
 * 用于测试MyBatis
 * 数据库建库语句为：
 * create table t_dept(
 * deptno int primary key,
 * dname varchar(20),
 * loc varchar(50)
 * );
 * insert into t_dept values (10,'testing','beijing');
 * insert into t_dept values (20,'saling','shanghai');
 * @author ZhangZe
 *
 */
public class Dept {
	private Integer deptno;
    private String dname;
    private String loc;
    public Integer getDeptno() {
        return deptno; 
    }
    public void setDeptno(Integer deptno) {
        this.deptno = deptno;
    }
    public String getDname() {
        return dname;
    }
    public void setDname(String dname) {
        this.dname = dname;
    }
    public String getLoc() {
        return loc;
    }
    public void setLoc(String loc) {
        this.loc = loc;
    }
}
