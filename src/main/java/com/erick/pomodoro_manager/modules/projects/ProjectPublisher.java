package com.erick.pomodoro_manager.modules.projects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;

@Component
public class ProjectPublisher   {
    
    @Autowired
    ApplicationEventPublisher publisher;

    public Project publishEvent(EntityEvent<Project> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

    public List<Project> publishEvent(ListEntityEvent<Project> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

    public void publishEvent(ApplicationEvent event) {
        publisher.publishEvent(event);
    }
}
