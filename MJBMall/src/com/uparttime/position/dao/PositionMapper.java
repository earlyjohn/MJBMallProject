package com.uparttime.position.dao;

import java.util.List;

import com.uparttime.position.entity.Position;
import com.uparttime.position.entity.PositionDetails;

public interface PositionMapper {
    public List<Position> findPosition(int page,int rows);
    public List<PositionDetails> findPositionDetails(int id);
}
