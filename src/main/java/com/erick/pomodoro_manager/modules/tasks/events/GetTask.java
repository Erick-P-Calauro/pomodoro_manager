package com.erick.pomodoro_manager.modules.tasks.events;

import java.util.UUID;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.tasks.Task;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetTask extends EntityEvent<Task> {
    
    private final UUID uid;

    public GetTask(Object source, UUID uid) {
        super(source);
        this.uid = uid;
    }
}
