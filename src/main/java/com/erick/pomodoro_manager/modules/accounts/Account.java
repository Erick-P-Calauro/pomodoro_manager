package com.erick.pomodoro_manager.modules.accounts;

import java.util.UUID;

import com.erick.pomodoro_manager.modules.settings.Settings;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Account {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uid;

    @NotBlank
    @Size(min = 2)
    @Column(unique = true)
    private String name;

    @NotBlank
    @Size(min = 6)
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="settings_id")
    private Settings settings;

}
