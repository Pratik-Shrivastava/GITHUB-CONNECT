package com.pratik.GithHubConnect.common.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
public class GitHubUserData {

    private String name;
    private String languages;
    private String location;
    private Long activities;
    private Long numberOfRepository;
    private String currentCompany;
    private Long followers;
    private Long following;


}
