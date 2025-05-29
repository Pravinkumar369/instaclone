package com.example.Instagram.clone.Repository;

import com.example.Instagram.clone.Module.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepo extends JpaRepository<Profile,Long> {
}
