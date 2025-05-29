package com.example.Instagram.clone.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class PostDTO {
    private Long id;
    private String caption;
    private String image;
    private int likeCount;
    private LocalDateTime time;
    private List<CommentDTO> comments;

    public PostDTO(Long id, String caption, String image, int likeCount, LocalDateTime time, List<CommentDTO> comments) {
        this.id = id;
        this.caption = caption;
        this.image = image;
        this.likeCount = likeCount;
        this.time = time;
        this.comments = comments;
    }
    // getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public List<CommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<CommentDTO> comments) {
        this.comments = comments;
    }
}

