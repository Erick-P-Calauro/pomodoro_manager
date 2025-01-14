package com.erick.pomodoro_manager.modules.accounts.events;

import org.springframework.context.ApplicationEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteAccount extends ApplicationEvent {
    
    private final Account account;

    public DeleteAccount(Object source, Account account) {
        super(source);
        this.account = account;
    }

}
