package com.erick.pomodoro_manager.modules.accounts.events;

import com.erick.pomodoro_manager.configuration.abstraction.ListEntityEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllAccounts extends ListEntityEvent<Account> {
    
    private final String args;

    public GetAllAccounts(Object source, String args) {
        super(source);
        this.args = args;
    }
}
