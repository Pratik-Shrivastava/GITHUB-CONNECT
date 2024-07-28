package com.pratik.GithHubConnect.controller;

import com.pratik.GithHubConnect.common.model.GitHubUserAllData;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api.github.com/users")
public class GitHubController {

    @GetMapping("/{userName}")
    public GitHubUserAllData getUserData(@PathVariable String userName) {
        // Sample data for demonstration purposes
        GitHubUserAllData userData = new GitHubUserAllData();
        userData.setLogin(userName);

        return userData;
    }
}
