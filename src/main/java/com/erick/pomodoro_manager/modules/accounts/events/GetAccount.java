package com.erick.pomodoro_manager.modules.accounts.events;

import java.util.UUID;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAccount extends AccountEvent {
    
    private final UUID uid;
    
    public GetAccount(Object source, UUID uid) {
        super(source);
        this.uid = uid;
    }
}
