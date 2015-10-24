package test;

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class TestSql {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		try {
			testInsert();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}

	}
	//第一个测试，用于测试两个包导入是否成功
	static void testSqlSession() throws IOException{
        String conf = "SqlMapConfig.xml";
        Reader reader = 
            Resources.getResourceAsReader(conf);
        //创建SessionFactory对象
        SqlSessionFactoryBuilder sfb = 
                new SqlSessionFactoryBuilder();
        SqlSessionFactory sf = sfb.build(reader);
        //创建Session
        SqlSession session = sf.openSession();
        
        System.out.println(session);
        
        //关闭Session
        session.close();
    }
	//第二个测试，用于测试各个配置文件是否配置成功
	static void testInsert() throws IOException{
        String conf = "SqlMapConfig.xml";
        Reader reader = 
            Resources.getResourceAsReader(conf);
        //创建SessionFactory对象
        SqlSessionFactoryBuilder sfb = 
                new SqlSessionFactoryBuilder();
        SqlSessionFactory sf = sfb.build(reader);
        //创建Session
        SqlSession session = sf.openSession();
        //调用addDept操作
        Dept dept = new Dept();
        dept.setDeptno(60);
        dept.setDname("testing");
        dept.setLoc("beijing");
        session.insert("addDept",dept);
        session.commit();
        //关闭
        session.close();
    }

}
