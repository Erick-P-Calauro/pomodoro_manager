package com.erick.pomodoro_manager.modules.tasks.events;

import org.springframework.context.ApplicationEvent;
import com.erick.pomodoro_manager.modules.tasks.Task;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteTask extends ApplicationEvent {
    
    public final Task task;

    public DeleteTask(Object source, Task task) {
        super(source);
        this.task = task;
    }
}
