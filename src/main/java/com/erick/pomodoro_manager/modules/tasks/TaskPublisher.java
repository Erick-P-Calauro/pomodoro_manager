package com.erick.pomodoro_manager.modules.tasks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;

@Component
public class TaskPublisher {
    
    @Autowired
    ApplicationEventPublisher publisher;

    public void publishEvent(Object event) {
        publisher.publishEvent(event);
    }

    public Task publishEvent(EntityEvent<Task> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

    public List<Task> publishEvent(ListEntityEvent<Task> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

}
