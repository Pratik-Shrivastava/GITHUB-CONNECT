package com.pratik.GithHubConnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;



@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GitHubApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(GitHubApplication.class, args);
	}
}
