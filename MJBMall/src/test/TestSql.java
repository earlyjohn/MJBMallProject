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
		// TODO �Զ����ɵķ������
		try {
			testInsert();
		} catch (IOException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}

	}
	//��һ�����ԣ����ڲ��������������Ƿ�ɹ�
	static void testSqlSession() throws IOException{
        String conf = "SqlMapConfig.xml";
        Reader reader = 
            Resources.getResourceAsReader(conf);
        //����SessionFactory����
        SqlSessionFactoryBuilder sfb = 
                new SqlSessionFactoryBuilder();
        SqlSessionFactory sf = sfb.build(reader);
        //����Session
        SqlSession session = sf.openSession();
        
        System.out.println(session);
        
        //�ر�Session
        session.close();
    }
	//�ڶ������ԣ����ڲ��Ը��������ļ��Ƿ����óɹ�
	static void testInsert() throws IOException{
        String conf = "SqlMapConfig.xml";
        Reader reader = 
            Resources.getResourceAsReader(conf);
        //����SessionFactory����
        SqlSessionFactoryBuilder sfb = 
                new SqlSessionFactoryBuilder();
        SqlSessionFactory sf = sfb.build(reader);
        //����Session
        SqlSession session = sf.openSession();
        //����addDept����
        Dept dept = new Dept();
        dept.setDeptno(60);
        dept.setDname("testing");
        dept.setLoc("beijing");
        session.insert("addDept",dept);
        session.commit();
        //�ر�
        session.close();
    }

}
