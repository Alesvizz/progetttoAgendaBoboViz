package it.ms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ms.api.data.entity.Task;
import it.ms.api.data.repo.TaskRepository;

@RestController
@RequestMapping("task")
public class TaskController {

    @Autowired TaskRepository taskRepository;

    @PostMapping("")
    public Task insert(@RequestBody Task t){

        return taskRepository.save(t);

    }
    @GetMapping("list")
    public List<Task> list() {
        return taskRepository.findAll();
    }

    @DeleteMapping("{id}")
    public void delete (@PathVariable("id") long id){
         taskRepository.deleteById(id);
         
    }
     

}
