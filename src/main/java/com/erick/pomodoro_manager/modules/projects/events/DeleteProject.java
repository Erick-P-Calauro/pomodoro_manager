package com.erick.pomodoro_manager.modules.projects.events;

import org.springframework.context.ApplicationEvent;
import com.erick.pomodoro_manager.modules.projects.Project;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteProject extends ApplicationEvent {
    
    private final Project project;

    public DeleteProject(Object source, Project project) {
        super(source);
        this.project = project;
    }

}
