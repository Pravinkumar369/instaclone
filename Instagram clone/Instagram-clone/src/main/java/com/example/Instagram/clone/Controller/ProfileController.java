package com.example.Instagram.clone.Controller;

import com.example.Instagram.clone.Module.Profile;
import com.example.Instagram.clone.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {
@Autowired
    private final ProfileRepo repository;

    public ProfileController(ProfileRepo repository) {
        this.repository = repository;
    }

    @GetMapping("/profile")
    public List<Profile> getProfile() {
        return repository.findAll();
    }

    @PostMapping("/profile/add")
    public Profile addpost(@RequestBody Profile profile){
        return repository.save(profile);
    }

    @PutMapping("/profile")
    public Profile updateProfile(@RequestBody Profile profile) {
        profile.setId(1L);
        return repository.save(profile);
}
}