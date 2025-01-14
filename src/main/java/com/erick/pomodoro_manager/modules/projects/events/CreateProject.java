package com.erick.pomodoro_manager.modules.projects.events;

import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.projects.Project;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateProject extends EntityEvent<Project> {

    private final Project project;

    public CreateProject(Object source, Project project) {
        super(source);
        this.project = project;
    }

}
