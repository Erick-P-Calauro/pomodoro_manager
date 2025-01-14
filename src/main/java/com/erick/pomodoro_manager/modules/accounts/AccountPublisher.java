package com.erick.pomodoro_manager.modules.accounts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;
import com.erick.pomodoro_manager.modules.accounts.events.AccountEvent;
import com.erick.pomodoro_manager.modules.accounts.events.GetAllAccounts;

@Component
public class AccountPublisher  {

    @Autowired
    ApplicationEventPublisher publiser;

    public Account publishEvent(AccountEvent event) {
        publiser.publishEvent(event);

        return event.getResponse();
    }

    public List<Account> publishEvent(GetAllAccounts event) {
        publiser.publishEvent(event);

        return event.getAccounts();
    }

    public void publishEvent(ApplicationEvent event) {
        publiser.publishEvent(event);
    }
    
}
