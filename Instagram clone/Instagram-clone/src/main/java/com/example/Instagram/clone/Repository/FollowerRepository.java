package com.example.Instagram.clone.Repository;

import com.example.Instagram.clone.Module.Followers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowerRepository extends JpaRepository<Followers,Long> {
}
