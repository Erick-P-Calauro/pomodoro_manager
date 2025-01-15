package com.erick.pomodoro_manager.modules.tasks;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import com.erick.pomodoro_manager.modules.tasks.events.CreateTask;
import com.erick.pomodoro_manager.modules.tasks.events.DeleteTask;
import com.erick.pomodoro_manager.modules.tasks.events.GetAllTasks;
import com.erick.pomodoro_manager.modules.tasks.events.GetTask;
import com.erick.pomodoro_manager.modules.tasks.events.UpdateTask;

@Service
public class TaskService {
    
    @Autowired
    TaskRepository repository;

    @EventListener
    public void createTask(CreateTask event) {
        Task task = repository.save(event.getTask());

        event.setResponse(task);
    }

    @EventListener
    public void getAllTasks(GetAllTasks event) {
        event.setResponse(repository.findAll());
    }

    @EventListener
    public void getTaskByUid(GetTask event) {
        Optional<Task> task = repository.findById(event.getUid());

        if(task.isPresent()) {
            event.setResponse(task.get());
        }else {
            event.setResponse(new Task());
        }

    }

    @EventListener
    public void updateTask(UpdateTask event) {
        Task task = repository.save(event.getTask());

        event.setResponse(task);
    }

    @EventListener
    public void deleteTask(DeleteTask event) {
        repository.delete(event.getTask());
    }

}
