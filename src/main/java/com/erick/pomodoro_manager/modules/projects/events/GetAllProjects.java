package com.erick.pomodoro_manager.modules.projects.events;

import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;
import com.erick.pomodoro_manager.modules.projects.Project;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllProjects extends ListEntityEvent<Project>  {

    public GetAllProjects(Object source) {
        super(source);
    }
}
