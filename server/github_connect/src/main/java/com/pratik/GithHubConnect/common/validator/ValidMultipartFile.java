package com.pratik.GithHubConnect.common.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = MultipartFileValidator.class)
public @interface ValidMultipartFile {
	String message() default "Invalid file";
	
	Class<?>[] groups() default {};
	
	Class<? extends Payload>[] payload() default {};
	
	long maxSize() default Long.MAX_VALUE;
	
	String[] contentTypes() default {};
}
