package com.erick.pomodoro_manager.modules.accounts.events;

import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateAccount extends AccountEvent {
    
    private final Account account;
    private Account response;
    
    public UpdateAccount(Object source, Account account) {
        super(source);
        this.account = account;
    }
}