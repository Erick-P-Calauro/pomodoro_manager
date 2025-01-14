package com.erick.pomodoro_manager.modules.accounts.events;

import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateAccount extends EntityEvent<Account> {
    
    private final Account account;
    private Account response;
    
    public UpdateAccount(Object source, Account account) {
        super(source);
        this.account = account;
    }
}
