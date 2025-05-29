package com.example.Instagram.clone.Repository;

import com.example.Instagram.clone.Module.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
