package com.mjbmall.members.dao;

import java.util.List;
import com.mjbmall.members.entity.Comments;
import com.mjbmall.members.entity.ContactUs;
import com.mjbmall.members.entity.FeedBack;
import com.mjbmall.members.entity.HeadPicUrl;
import com.mjbmall.members.entity.MemberAddr;
import com.mjbmall.members.entity.Members;
import com.mjbmall.members.entity.Messages;
import com.mjbmall.members.entity.Userinfo;
import com.mjbmall.members.entity.RecentlyBrowse;

public interface MembersMapper {
	public List<Members> getMembersList(Members member);
	public void updateMember(Members member);
	public List<Comments> getCommentsList(Comments comment);
	public List<Messages> getMessagesList(Messages messages);
	public void updateUserinfo(Userinfo userinfo);	
	public List<Userinfo> getUserinfo(Userinfo userinfo);
	public List<MemberAddr> getMemberAddrsList(MemberAddr memberaddr);
	public List<RecentlyBrowse> getRecentlyBrowsesList(int member_id);
	public void addFeedBack(FeedBack feedBack);
	public String getAboutUs();
	public List<ContactUs> getContactUsList();
	/**
	 * 修改用户头像
	 */
	public void updateUserHeadPicUrl(HeadPicUrl h);
}
