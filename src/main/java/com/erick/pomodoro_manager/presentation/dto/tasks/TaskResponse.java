package com.erick.pomodoro_manager.presentation.dto.tasks;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TaskResponse {
    
    private UUID uid;

    private String title;

    private String description;

    private Integer productivityGoal;

    private Integer productivityDone;
}
