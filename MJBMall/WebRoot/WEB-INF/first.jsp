<%--
��վ: <a href="http://www.crazyit.org">���Java����</a>
author  yeeku.H.lee kongyeeku@163.com
version  1.0
Copyright (C), 2001-2016, yeeku.H.Lee
This program is protected by copyright laws.
Program Name:
Date: 
--%>

<%@ page contentType="text/html; charset=GBK" language="java" errorPage="" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>ʹ��JSON���</title>
	<script src="js/jquery-1.11.1.js" 
	type="text/javascript">
	</script>
	<script type="text/javascript">
		function gotClick()
		{
			$("#show").hide();
			// ָ����JSONExample�������󣬽�idΪform1�ı��������ı��ؼ�ת��Ϊ�������
			var data1=$("#field1").val();
			var data2=$("#field2").val();
			var data3=$("#field3").val();
			alert(data1+data2+data3);
			$.post("http:172.16.60.223:8080/shop/test" , {field1:data1,filed2:data2,filed3:data3}, 
				// ָ���ص�����
				function(data , statusText)
				{
					$("#show").height(80)
						.width(240)
						.css("border" , "1px solid black")
						.css("border-radius" , "15px")
						.css("background-color" , "#efef99")
						.css("color" , "#ff0000")
						.css("padding" , "20px")
						.empty();
					// ����JavaScript����ĸ�����
					for(var propName in data)
					{
						$("#show").append(propName + "-->"
							+ data["field4"] + "<br />");
					}
					$("#show").show(600);
				},
				// ָ����������ӦΪJSON����
				"json");
		}
	</script>
</head>
<body>
<s:form id="form1">
	<s:textfield id="field1" name="field1" label="Field 1"/>
	<s:textfield id="field2" name="field2" label="Field 2"/>
	<s:textfield id="field3" name="field3" label="Field 3"/>
	<tr><td colspan="2">
	<input type="button" value="�ύ" onclick="gotClick();"/>
	</td></tr>
</s:form>
<div id="show">
</div>
</body>
</html>
