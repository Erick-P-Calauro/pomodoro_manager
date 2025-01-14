package com.erick.pomodoro_manager.modules.accounts.events;

import java.util.UUID;
import com.erick.pomodoro_manager.configuration.abstraction.EntityEvent;
import com.erick.pomodoro_manager.modules.accounts.Account;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAccount extends EntityEvent<Account> {
    
    private final UUID uid;
    
    public GetAccount(Object source, UUID uid) {
        super(source);
        this.uid = uid;
    }
}
