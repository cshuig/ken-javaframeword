package com.shine.DBUtil;

import java.sql.SQLException;

import com.shine.DBUtil.model.DBModel;
import com.shine.framework.core.util.FileUtil;

public class CacheSelectExample {

	/**
	 * 缓冲提交例子
	 * 
	 * @param args
	 * @throws SQLException 
	 */
	public static void main(String[] args) throws SQLException {
		DBUtil
				.getInstance()
				.init(
						"E:\\workspace\\JavaFramework2.5\\src\\com\\shine\\DBUtil\\config\\dbXml.xml");

		DBModel model = DBUtil.getInstance().executeCacheQuery("jdbc/test",
				"select * from test1");
		FileUtil.createFile("E://w1.txt");
		model.next();
		FileUtil.writeFile("E://w1.txt", model.getDataXml());
		model.close();

		// 缓存查询
		DBModel model1 = DBUtil.getInstance().executeCacheQuery("jdbc/test",
				"select * from test1");
		FileUtil.createFile("E://w2.txt");
		model1.next();
		FileUtil.writeFile("E://w2.txt", model1.getDataXml());
		model1.close();

		// 非缓存查询
		DBModel model2 = DBUtil.getInstance().executeQuery("jdbc/test",
				"select * from test1");
		FileUtil.createFile("E://w3.txt");
		model2.next();
		FileUtil.writeFile("E://w3.txt", model2.getDataXml());
		model2.close();
	}

}
