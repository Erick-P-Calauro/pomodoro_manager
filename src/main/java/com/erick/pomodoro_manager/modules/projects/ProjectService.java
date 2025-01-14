package com.erick.pomodoro_manager.modules.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import com.erick.pomodoro_manager.modules.projects.events.CreateProject;
import com.erick.pomodoro_manager.modules.projects.events.DeleteProject;
import com.erick.pomodoro_manager.modules.projects.events.GetAllProjects;
import com.erick.pomodoro_manager.modules.projects.events.GetProject;
import com.erick.pomodoro_manager.modules.projects.events.UpdateProject;

@Service
public class ProjectService {
    
    @Autowired
    ProjectRepository repository;

    @EventListener
    public void createProject(CreateProject event) {
        Project project = repository.save(event.getProject());

        event.setResponse(project);
    }

    @EventListener
    public void getProjectByUid(GetProject event) {
        event.setResponse(repository.findById(event.getUid()).get());
    }

    @EventListener
    public void getAllProjects(GetAllProjects event) {
        event.setResponse(repository.findAll());
    }

    @EventListener
    public void updateProject(UpdateProject event) {
        Project project = repository.save(event.getProject());

        event.setResponse(project);
    }

    @EventListener
    public void deleteProject(DeleteProject event) {
        repository.delete(event.getProject());
    }

}
