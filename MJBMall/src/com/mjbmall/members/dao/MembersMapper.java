package com.mjbmall.members.dao;

import java.util.List;
import com.mjbmall.members.entity.Comments;
import com.mjbmall.members.entity.Members;
import com.mjbmall.members.entity.Messages;

public interface MembersMapper {
	public List<Members> getMembersList(Members member);
	public List<Comments> getCommentsList(Comments comment);
	public List<Messages> getMessagesList(Messages messages);
}
