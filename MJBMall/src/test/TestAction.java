package test;

public class TestAction{
	private DeptMapper deptMapper;
	public String test(){
    	Dept dept = new Dept();
    	dept.setDeptno(11111);
    	dept.setDname("what?");
    	dept.setLoc("shenme?");
    	deptMapper.addtest();
		return "success";
     }
	public String test1(){
		return "success";
	}
	public DeptMapper getDeptMapper() {
		return deptMapper;
	}
	public void setDeptMapper(DeptMapper deptMapper) {
		this.deptMapper = deptMapper;
	}
}
