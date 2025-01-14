package com.erick.pomodoro_manager.modules.settings;

import java.lang.reflect.Type;
import java.util.List;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class MaxListSizeValidator implements ConstraintValidator<MaxListSizeConstraint, List<Type>> {
    
    @Override
    public boolean isValid(List<Type> values, ConstraintValidatorContext context) {
        return values.size() == 3;
    }
}
