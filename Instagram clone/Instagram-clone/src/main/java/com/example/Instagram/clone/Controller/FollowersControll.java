package com.example.Instagram.clone.Controller;

import com.example.Instagram.clone.Module.Followers;
import com.example.Instagram.clone.Module.Profile;
import com.example.Instagram.clone.Repository.FollowerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:5173/")
public class FollowersControll {

    @Autowired
    FollowerRepository fr1;

    @GetMapping("/followers")
    public List<Followers> getFollowers(){
       return fr1.findAll();
    }


    @PostMapping("/followers")
    public ResponseEntity<Followers> addFollower(@RequestBody Followers follower) {
        Followers savedFollower = fr1.save(follower);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFollower);
    }

@DeleteMapping("/followers/{id}")
public String delete(@PathVariable Long id){
    fr1.deleteById(id);
    return "deleted";
}}

//    @PutMapping("/followers")
//    public Followers updateProfile(@RequestBody Followers follow) {
//        Followers.setId(1L);
//        return fr1.save(follow);
//}}
