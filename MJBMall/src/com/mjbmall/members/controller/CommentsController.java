package com.mjbmall.members.controller;

import java.util.List;

import com.mjbmall.members.dao.MembersMapper;
import com.mjbmall.members.entity.Comments;
import com.opensymphony.xwork2.Action;

public class CommentsController {
	private MembersMapper membersMapper;
	private int author_id;
	private List<Comments> commentslist = null;
	
	public String findComments(){
		try{
			Comments comments = new Comments();
			comments.setAuthor_id(author_id);
			commentslist = membersMapper.getCommentsList(comments);
		}catch (Exception e) {
			
		}
		return Action.SUCCESS;
	}
	public void setMembersMapper(MembersMapper membersMapper){
		this.membersMapper = membersMapper;
	}
	public void setAuthor_id(int author_id){
		this.author_id = author_id;
	}
	public int getAuthor_id(){
		return author_id;
	}
	public List<Comments> getCommentsList(){
		return commentslist;
	}
}
