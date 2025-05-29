package com.example.Instagram.clone.Controller;

import com.example.Instagram.clone.DTO.CommentDTO;
import com.example.Instagram.clone.DTO.PostDTO;
import com.example.Instagram.clone.DTO.UserDTO;
import com.example.Instagram.clone.Module.User;
import com.example.Instagram.clone.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(value = "http://localhost:5173/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(user -> {
            List<PostDTO> postDTOs = user.getPosts().stream().map(post -> {
                List<CommentDTO> commentDTOs = post.getComments().stream()
                        .map(comment -> new CommentDTO(comment.getId(), comment.getComment()))
                        .toList();
                return new PostDTO(post.getId(), post.getCaption(), post.getImage(), post.getLikeCount(), post.getTime(), commentDTOs);
            }).toList();
            return new UserDTO(user.getId(), user.getName(), user.getProfilePicture(), postDTOs);
        }).toList();
    }

    @GetMapping("/feed")
    public List<UserDTO> getFeed() {
        return getAllUsers(); // simple reuse
    }
}