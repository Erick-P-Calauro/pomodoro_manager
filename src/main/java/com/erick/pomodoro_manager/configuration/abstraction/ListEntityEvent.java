package com.erick.pomodoro_manager.configuration.abstraction;

import java.util.List;
import org.springframework.context.ApplicationEvent;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class ListEntityEvent<T> extends ApplicationEvent{
    
    private List<T> response;

    public ListEntityEvent(Object source) {
        super(source);
    }
}
