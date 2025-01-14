package com.erick.pomodoro_manager.presentation.dto.accounts;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponse {
    
    private UUID uid;

    private String name;

    // private String password;

}
