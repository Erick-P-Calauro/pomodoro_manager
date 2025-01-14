package com.erick.pomodoro_manager.modules.settings;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Constraint(validatedBy = MaxListSizeValidator.class)
@Retention(RetentionPolicy.RUNTIME)
public @interface MaxListSizeConstraint {
    String message() default "The input must contain 3 elements.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
