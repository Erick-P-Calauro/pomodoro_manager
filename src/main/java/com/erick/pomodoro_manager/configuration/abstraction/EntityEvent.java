package com.erick.pomodoro_manager.configuration.abstraction;

import org.springframework.context.ApplicationEvent;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class EntityEvent<T> extends ApplicationEvent {
    
    private T response;

    public EntityEvent(Object source) {
        super(source);
    }

}
