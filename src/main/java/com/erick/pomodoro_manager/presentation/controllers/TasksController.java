package com.erick.pomodoro_manager.presentation.controllers;

import java.util.List;
import java.util.UUID;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.erick.pomodoro_manager.modules.tasks.Task;
import com.erick.pomodoro_manager.modules.tasks.TaskPublisher;
import com.erick.pomodoro_manager.modules.tasks.events.CreateTask;
import com.erick.pomodoro_manager.modules.tasks.events.DeleteTask;
import com.erick.pomodoro_manager.modules.tasks.events.GetAllTasks;
import com.erick.pomodoro_manager.modules.tasks.events.GetTask;
import com.erick.pomodoro_manager.modules.tasks.events.UpdateTask;
import com.erick.pomodoro_manager.presentation.dto.tasks.TaskCreate;
import com.erick.pomodoro_manager.presentation.dto.tasks.TaskResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/task")
public class TasksController {
    
    @Autowired
    TaskPublisher publisher;

    @Autowired
    ModelMapper mapper;

    @PostMapping("/create")
    public ResponseEntity<TaskResponse> createTask(@Valid @RequestBody TaskCreate taskCreate, BindingResult result) {

        Task task = mapper.map(taskCreate, Task.class);
        task = publisher.publishEvent(new CreateTask(this, task));
        TaskResponse taskDTO = mapper.map(task, TaskResponse.class);

        return ResponseEntity.ok().body(taskDTO);
    }

    @GetMapping
    public ResponseEntity<List<TaskResponse>> getAllTasks() {

        List<Task> allTasks = publisher.publishEvent(new GetAllTasks(this));
        List<TaskResponse> allTasksDTO = allTasks.stream().map(task -> mapper.map(task, TaskResponse.class)).toList();

        return ResponseEntity.ok().body(allTasksDTO);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<TaskResponse> getTaskByUid(@PathVariable("uid") UUID uid) {

        Task task = publisher.publishEvent(new GetTask(this, uid));
        TaskResponse taskDTO = mapper.map(task, TaskResponse.class);

        return ResponseEntity.ok().body(taskDTO);
    }

    @PutMapping("/update/{uid}")
    public ResponseEntity<TaskResponse> updateTask(@PathVariable("uid") UUID uid, @Valid @RequestBody TaskCreate taskCreate, BindingResult result) {

        Task task = mapper.map(taskCreate, Task.class);
        task.setUid(uid);
        task = publisher.publishEvent(new UpdateTask(this, task));

        TaskResponse taskDTO = mapper.map(task, TaskResponse.class);

        return ResponseEntity.ok().body(taskDTO);
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deleteTask(@PathVariable("uid") UUID uid) {

        Task task = publisher.publishEvent(new GetTask(this, uid));
        publisher.publishEvent(new DeleteTask(this, task));

        return ResponseEntity.ok().body("Task succesfuly deleted.");

    }

}
