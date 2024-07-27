package com.pratik.GithHubConnect.config;

import lombok.AllArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

import java.util.Locale;

@Configuration
@ComponentScan(basePackages = {"com.pratik.GitHubConnect"})
@AllArgsConstructor(onConstructor_ = @__({@Autowired}))
public class WebMvcConfig implements WebMvcConfigurer {
	
	private final Settings settings;
	
	@Override
	public void addResourceHandlers(@NotNull ResourceHandlerRegistry registry) {
		
		registry
			.addResourceHandler("/resources/**")
			.addResourceLocations("file:" + settings.getStaticResourcesRootPath() + "/");
		
		registry.addResourceHandler("/static/**").
			addResourceLocations("classpath:/static/");
	}
	
	@Override
	public void addCorsMappings(@NotNull CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "TRACE");
	}
	
	@Bean
	public LocaleResolver localeResolver() {
		CookieLocaleResolver resolver = new CookieLocaleResolver();
		resolver.setDefaultLocale(new Locale("en"));
		resolver.setCookieName("myLocaleCookie");
		resolver.setCookieMaxAge(-1);
		return resolver;
	}
}
