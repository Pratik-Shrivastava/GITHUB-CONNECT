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
public class GitHubUserAllData {

    private String login = "Pratik-Shrivastava";
    private Long id = 108012653L;
    private String nodeId = "U_kgDOBnAkbQ";
    private String avatarUrl = "https://avatars.githubusercontent.com/u/108012653?v=4";
    private String url = "https://api.github.com/users/Pratik-Shrivastava";
    private String htmlUrl = "https://github.com/Pratik-Shrivastava";
    private String followersUrl = "https://api.github.com/users/Pratik-Shrivastava/followers";
    private String followingUrl = "https://api.github.com/users/Pratik-Shrivastava/following{/other_user}";
    private String gistsUrl = "https://api.github.com/users/Pratik-Shrivastava/gists{/gist_id}";
    private String starredUrl = "https://api.github.com/users/Pratik-Shrivastava/starred{/owner}{/repo}";
    private String subscriptionsUrl = "https://api.github.com/users/Pratik-Shrivastava/subscriptions";
    private String organizationsUrl = "https://api.github.com/users/Pratik-Shrivastava/orgs";
    private String reposUrl = "https://api.github.com/users/Pratik-Shrivastava/repos";
    private String eventsUrl = "https://api.github.com/users/Pratik-Shrivastava/events{/privacy}";
    private String receivedEventsUrl = "https://api.github.com/users/Pratik-Shrivastava/received_events";
    private String type = "User";
    private Boolean siteAdmin = false;

    private String name = "Pratik Shrivastava";
    private String company = "Websofttechs";
    private String blog = "https://pratik-shrivastava.github.io/My-Portfolio-Website/";
    private String location = "Kolkata, India";
    private String email = null;

    private Boolean hireable = null;
    private String bio = "✅ Programmer\r\n✅ Learner\r\n✅ Gamer\r\n";
    private String twitterUsername = null;
    private Integer publicRepos = 30;
    private Integer publicGists = 0;
    private Long followers = 5L;
    private Long following = 4L;
    private String createdAt = "2022-06-22T15:03:24Z";
    private String updatedAt = "2024-06-25T08:41:14Z";
}
