package com.erick.pomodoro_manager.modules.accounts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;

@Component
public class AccountPublisher  {
    
    @Autowired
    ApplicationEventPublisher publisher;

    public Account publishEvent(EntityEvent<Account> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

    public List<Account> publishEvent(ListEntityEvent<Account> event) {
        publisher.publishEvent(event);

        return event.getResponse();
    }

    public void publishEvent(ApplicationEvent event) {
        publisher.publishEvent(event);
    }

}
