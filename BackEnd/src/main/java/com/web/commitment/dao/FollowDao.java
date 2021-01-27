package com.web.commitment.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.web.commitment.dto.Follow;
import com.web.commitment.dto.Profile;
@Repository
public interface FollowDao extends JpaRepository<Follow, String> {
	@Modifying
	@Query(value = "select * from follow f where f.follow_from=:email", nativeQuery = true)
	List<Follow> FindFollowByEmail(@Param("email")String email);
}