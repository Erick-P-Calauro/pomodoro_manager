package com.erick.pomodoro_manager.modules.tasks;

import java.util.UUID;

import com.erick.pomodoro_manager.modules.projects.Project;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uid;

    @NotBlank
    @Size(min = 3)
    private String title;

    private String description;

    @NotNull
    @Min(value = 1)
    private int productivityGoal;

    @NotNull
    private int productivityDone;

    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

}
