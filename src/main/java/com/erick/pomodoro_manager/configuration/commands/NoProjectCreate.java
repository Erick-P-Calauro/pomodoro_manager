package com.erick.pomodoro_manager.configuration.commands;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.erick.pomodoro_manager.modules.projects.Project;
import com.erick.pomodoro_manager.modules.projects.ProjectPublisher;
import com.erick.pomodoro_manager.modules.projects.events.CreateProject;
import com.erick.pomodoro_manager.modules.projects.events.GetProjectByName;
import com.erick.pomodoro_manager.presentation.dto.projects.ProjectCreate;
import jakarta.transaction.Transactional;

@Component
@Transactional
public class NoProjectCreate implements CommandLineRunner {

    @Autowired
    ProjectPublisher publisher;

    @Autowired
    ModelMapper mapper;

    @Override
    public void run(String... args) throws Exception {
        
        Project response = publisher.publishEvent(new GetProjectByName(this, "sem projeto"));

        if(response == null) {
            publisher.publishEvent(new CreateProject(this, mapper.map(new ProjectCreate("sem projeto"), Project.class)));
        }

    }
    
}
