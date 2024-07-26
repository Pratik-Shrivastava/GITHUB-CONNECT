package com.pratik.GithHubConnect.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Getter
public class Settings {
	
	@Value("${github.static.resources.root.path}") // Read path from application.properties
	private String staticResourcesRootPath;
	
	@Value("${github.static.server.path}")
	private String staticServerPath;
}
