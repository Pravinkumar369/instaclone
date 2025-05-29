package com.example.Instagram.clone.Controller;

import com.example.Instagram.clone.Module.Story;
import com.example.Instagram.clone.Repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(value = "http://localhost:5173/")
@RestController
@RequestMapping("/story")
public class StoryController {
    @Autowired
    StoryRepository sr1;

    @GetMapping
    public List<Story> getStory(){
        return sr1.findAll();
    }

    @PostMapping ("/add")
    public String addstory(@RequestBody Story story){
       sr1.save(story);
       return "story add success";
    }
    @GetMapping("/{id}")
    public Optional<Story> getregisteredId(@PathVariable int id){
        return  sr1.findById(id);
    }
}
