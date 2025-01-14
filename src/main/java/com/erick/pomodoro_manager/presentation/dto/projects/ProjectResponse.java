package com.erick.pomodoro_manager.presentation.dto.projects;

import java.util.List;
import java.util.UUID;
import com.erick.pomodoro_manager.modules.tasks.Task;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProjectResponse {
    
    private UUID uid;

    private String name;

    private List<Task> tasks;
}
