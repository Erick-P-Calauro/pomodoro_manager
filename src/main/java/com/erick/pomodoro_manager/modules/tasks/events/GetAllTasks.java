package com.erick.pomodoro_manager.modules.tasks.events;

import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;
import com.erick.pomodoro_manager.modules.tasks.Task;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllTasks extends ListEntityEvent<Task> {
    
    public GetAllTasks(Object source) {
        super(source);
    }

}
