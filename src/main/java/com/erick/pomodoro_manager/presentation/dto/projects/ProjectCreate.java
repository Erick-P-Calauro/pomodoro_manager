package com.erick.pomodoro_manager.presentation.dto.projects;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProjectCreate {
    
    @NotBlank
    @Size(min = 3)
    private String name;

}
