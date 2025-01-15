package com.erick.pomodoro_manager.presentation.dto.tasks;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TaskCreate {

    @NotBlank
    @Size(min = 3)
    private String title;

    private String description;

    @NotNull
    @Min(value = 1)
    private Integer productivityGoal;

    @NotNull
    private Integer productivityDone;
}
