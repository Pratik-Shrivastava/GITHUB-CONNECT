package com.pratik.GithHubConnect.swagger;

import com.google.common.collect.Lists;
import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;
import java.util.List;


@Import(BeanValidatorPluginsConfiguration.class)
@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
			       .ignoredParameterTypes(java.util.Locale.class)
			       .pathMapping("/")
			       .select()
			       .apis(RequestHandlerSelectors.basePackage("com.pratik.GitHubConnect"))
			       .paths(PathSelectors.any())
			       .build()
			       .securityContexts(Lists.newArrayList(securityContext()))
			       .securitySchemes(Collections.singletonList(apiKey()));
	}
	
	private SecurityContext securityContext() {
		return SecurityContext.builder()
			       .securityReferences(defaultAuth())
			       .forPaths(PathSelectors.any())
			       .build();
	}
	
	private List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope
			= new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		
		return Collections.singletonList(
			new SecurityReference("apikey", authorizationScopes)
		);
	}
	
	@NotNull
	@Contract(" -> new")
	private ApiKey apiKey() {
		return new ApiKey("apikey", "apikey", "header");
	}
	
}