package com.example.Instagram.clone.Repository;

import com.example.Instagram.clone.Module.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryRepository extends JpaRepository<Story,Integer> {
}
