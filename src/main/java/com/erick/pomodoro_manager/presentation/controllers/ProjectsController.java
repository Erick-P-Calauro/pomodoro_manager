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
import com.erick.pomodoro_manager.modules.projects.Project;
import com.erick.pomodoro_manager.modules.projects.ProjectPublisher;
import com.erick.pomodoro_manager.modules.projects.events.CreateProject;
import com.erick.pomodoro_manager.modules.projects.events.DeleteProject;
import com.erick.pomodoro_manager.modules.projects.events.GetAllProjects;
import com.erick.pomodoro_manager.modules.projects.events.GetProject;
import com.erick.pomodoro_manager.modules.projects.events.UpdateProject;
import com.erick.pomodoro_manager.presentation.dto.projects.ProjectCreate;
import com.erick.pomodoro_manager.presentation.dto.projects.ProjectResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/project")
public class ProjectsController {
    
    @Autowired
    ProjectPublisher projectPublisher;

    @Autowired
    ModelMapper mapper;

    @PostMapping("/create")
    public ResponseEntity<ProjectResponse> createProject(@Valid @RequestBody ProjectCreate projectCreate, BindingResult result) {

        Project project = mapper.map(projectCreate, Project.class);
        project = projectPublisher.publishEvent(new CreateProject(this, project));
        ProjectResponse projectDTO = mapper.map(project, ProjectResponse.class);

        return ResponseEntity.ok().body(projectDTO);
    }

    @GetMapping
    public ResponseEntity<List<ProjectResponse>> getAllProjects() {
        
        List<Project> projects = projectPublisher.publishEvent(new GetAllProjects(this));
        List<ProjectResponse> allProjectsDTO = projects.stream().map(project -> mapper.map(project, ProjectResponse.class)).toList(); 

        return ResponseEntity.ok().body(allProjectsDTO);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<ProjectResponse> getProjectByUID(@PathVariable("uid") UUID uid) {

        Project project = projectPublisher.publishEvent(new GetProject(this, uid));
        ProjectResponse projectDTO = mapper.map(project, ProjectResponse.class);

        return ResponseEntity.ok().body(projectDTO);
    }

    @PutMapping("/update/{uid}")
    public ResponseEntity<ProjectResponse> updateProject(@PathVariable("uid") UUID uid, @Valid @RequestBody ProjectCreate projectCreate, BindingResult result) {

        Project project = mapper.map(projectCreate, Project.class);
        project.setUid(uid);

        project = projectPublisher.publishEvent(new UpdateProject(this, project));

        ProjectResponse projectDTO = mapper.map(project, ProjectResponse.class);

        return ResponseEntity.ok().body(projectDTO);
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deleteProject(@PathVariable("uid") UUID uid) {

        Project project = projectPublisher.publishEvent(new GetProject(this, uid));
        projectPublisher.publishEvent(new DeleteProject(this, project));

        return ResponseEntity.ok().body("Project sucessfuly deleted.");
    }

}
