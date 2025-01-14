package com.erick.pomodoro_manager.modules.accounts.events;

import org.springframework.context.ApplicationEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class AccountEvent extends ApplicationEvent {
    
    private Account response;

    public AccountEvent(Object source) {
        super(source);
    }
}
