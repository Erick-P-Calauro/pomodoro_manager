package com.erick.pomodoro_manager.modules.accounts.events;

import java.util.List;
import org.springframework.context.ApplicationEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllAccounts extends ApplicationEvent {
    
    private final String args;
    private List<Account> accounts;
    
    public GetAllAccounts(Object source, String args) {
        super(source);
        this.args = args;
    }
}
