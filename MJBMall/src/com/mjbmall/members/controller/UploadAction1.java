package com.mjbmall.members.controller;


import java.io.File;
import java.io.Serializable;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.HeadPicUrl;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class UploadAction1 extends ActionSupport implements Serializable {
    
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private File image;//对应的就是表单中文件上传的那个输入域的名称，Struts2框架会封装成File类型的
    private String imageFileName;//   上传输入域FileName  文件名
    private String imageContentType;// 上传文件的MIME类型
    private int status;
    private MembersMapper membersMapper;
    private int member_id;
  /*  public File getImage() {
        return image;
    }*/



    public void setImage(File image) {
        this.image = image;
    }



  /*  public String getImageFileName() {
        return imageFileName;
    }*/



    public void setImageFileName(String imageFileName) {
        
    	this.imageFileName = imageFileName;
    }



  /*  public String getImageContentType() {
        return imageContentType;
    }*/



    public void setImageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
    }



    public String execute(){
        System.out.println(imageContentType);
        try {
            //处理实际的上传代码
            //找到存储文件的真实路径
//        System.out.println(imageFileName);
            ServletContext sc = ServletActionContext.getServletContext();
            String storePath = sc.getRealPath("/files");
            //构建输入输出流
//            OutputStream out = new FileOutputStream(storePath+"\\"+imageFileName);
//            InputStream in = new FileInputStream(image);
//            byte b[] = new byte[1024];
//            int len = -1;
//            while((len=in.read(b))!=-1){
//                out.write(b, 0, len);
//            }
//            out.close();
//            in.close();
            //imageFileName="这是假随机数12345";
            String[] filestr = imageFileName.split("\\.");
            String str="";
            for(int i=0;i<15;i++){
            	str=str+(int)(Math.random()*10);
            }
            imageFileName=str+"."+filestr[1];
            FileUtils.copyFile(image, new File(storePath,imageFileName));
            status=0;
            ActionContext.getContext().put("message", "上传成功！");
            /**
             * 将路径插入数据库
             */
            String ip = "115.28.204.151";//IP 根据服务器地址修改
            String port = "8088"; //端口
            String url = "http://"+ip+":"+port+"/MJBMall/files/"+imageFileName;
            HeadPicUrl h = new HeadPicUrl();
            h.setMemeber_id(member_id);
            h.setHead_pic(url);
            membersMapper.updateUserHeadPicUrl(h);
            
        } catch (Exception e) {
        	System.out.println(e);
        	e.printStackTrace();
            status=1;
            
        }
        return SUCCESS;
    }

	public int getStatus() {
		return status;
	}

	public void setMembersMapper(MembersMapper membersMapper) {
		this.membersMapper = membersMapper;
	}



	/**
	 * @param memeber_id 要设置的 memeber_id
	 */
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}
}