package com.example.Instagram.clone.Controller;



import com.example.Instagram.clone.Module.Post;

import com.example.Instagram.clone.Module.User;

import com.example.Instagram.clone.Repository.PostRepository;
import com.example.Instagram.clone.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(value = "http://localhost:5173/")
public class PostController {
    @Autowired private PostRepository postRepository;
    @Autowired private UserRepository userRepository;

    @PostMapping("/user/{userId}")
    public Post createPost(@PathVariable Long userId, @RequestBody Post post) {
        User user = userRepository.findById(userId).orElseThrow();
        post.setUser(user);
        post.setTime(LocalDateTime.now());
        return postRepository.save(post);
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @PutMapping("/{postId}/like")
    public ResponseEntity<String> likePost(@PathVariable Long postId) {
        int updated = postRepository.incrementLike(postId);
        return ResponseEntity.ok("Rows updated: "+updated);
    }
}