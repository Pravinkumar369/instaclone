package com.example.Instagram.clone.DTO;

import java.util.List;

public class UserDTO {
    private Long id;
    private String name;
    private String profilePicture;
    private List<PostDTO> posts;

    public UserDTO(Long id, String name, String profilePicture, List<PostDTO> posts) {
        this.id = id;
        this.name = name;
        this.profilePicture = profilePicture;
        this.posts = posts;
    }
    // getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public List<PostDTO> getPosts() {
        return posts;
    }

    public void setPosts(List<PostDTO> posts) {
        this.posts = posts;
    }
}
