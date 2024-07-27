package com.pratik.GithHubConnect.controller;


import com.pratik.GithHubConnect.common.model.GitHubUserData;
import com.pratik.GithHubConnect.common.utils.RowMapperUtil;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class PdfController {

    @PostMapping(
            value = "/github-user-data/download-profile",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void getProfilePdf(
            HttpServletRequest request,
            HttpServletResponse response,
//			@RequestParam("apikey") String apiKey,
            @RequestBody List<GitHubUserData> gitHubUserDataList
    ) throws Exception {

        if (gitHubUserDataList.isEmpty()) {
            throw new Exception(("No GitHub User Data Found"));
        }

        byte[] excelData = RowMapperUtil.convertGitHubDataToExcel(gitHubUserDataList);

        // Set response content type as application/vnd.ms-excel
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE + "; charset=UTF-8");

        // Set a downloadable filename
        response.setHeader("Content-Disposition", "attachment; filename=\"user-data-excel.xls\"");

        // Write the Excel data to the response output stream
        response.getOutputStream().write(excelData);

    }
}
