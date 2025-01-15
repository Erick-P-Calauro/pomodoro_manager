package com.erick.pomodoro_manager.modules.projects.events;

import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.projects.Project;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetProjectByName extends EntityEvent<Project>  {
    
    private final String name;

    public GetProjectByName(Object source, String name) {
        super(source);
        this.name = name;
    }

}
