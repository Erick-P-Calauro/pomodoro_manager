package com.erick.pomodoro_manager.modules.tasks.events;

import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.tasks.Task;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTask extends EntityEvent<Task> {
    
    private final Task task;

    public CreateTask(Object source, Task task) {
        super(source);
        this.task = task;
    }

}
