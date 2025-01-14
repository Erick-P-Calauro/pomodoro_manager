package com.erick.pomodoro_manager.modules.settings;

import java.util.List;
import java.util.UUID;

import com.erick.pomodoro_manager.configuration.MaxListSizeConstraint;
import com.erick.pomodoro_manager.modules.accounts.Account;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Settings {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uid;

    @NotEmpty
    @MaxListSizeConstraint
    private List<Integer> timerValues;

    @NotEmpty
    @MaxListSizeConstraint
    private List<String> themeColors;

    @OneToOne
    private Account account;

}
