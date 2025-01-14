package com.erick.pomodoro_manager.modules.projects.events;

import java.util.UUID;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.projects.Project;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetProject extends EntityEvent<Project>  {
    
    private final UUID uid;

    public GetProject(Object source, UUID uid) {
        super(source);
        this.uid = uid;
    }

}
