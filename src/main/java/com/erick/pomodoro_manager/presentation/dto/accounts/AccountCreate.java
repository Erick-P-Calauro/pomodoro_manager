package com.erick.pomodoro_manager.presentation.dto.accounts;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AccountCreate {

    @NotBlank
    @Size(min = 2)
    private String name;

    @NotBlank
    @Size(min = 6)
    private String password;

}
