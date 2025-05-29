package com.example.Instagram.clone.DTO;

public class CommentDTO {
    private Long id;
    private String comment;

    public CommentDTO(Long id, String comment) {
        this.id = id;
        this.comment = comment;
    }
    // getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
