package com.pratik.GithHubConnect.controller;

import com.pratik.GithHubConnect.common.model.GeneralResponse;
import com.pratik.GithHubConnect.common.model.GitHubUserData;
import com.pratik.GithHubConnect.common.utils.RowMapperUtil;
import com.pratik.GithHubConnect.constants.AppConstants;
import org.apache.poi.ss.usermodel.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ExcelController {


	@PostMapping("/upload-excel")
	public Object getGitHubLinksFromExcel(
			@RequestParam("file") MultipartFile file,
			@RequestParam(value = "columnName", required = false) String columnName
	) {
		try {
			Workbook workbook = WorkbookFactory.create(file.getInputStream());
			Sheet sheet = workbook.getSheetAt(0); // Assuming data is in the first sheet

			List<String> names = new ArrayList<>();
			int columnIndex = RowMapperUtil.findColumnIndex(sheet.getRow(0), columnName);

			if (columnIndex == -1) {
				return new ResponseEntity<>(
						new GeneralResponse(
								true,
								AppConstants.EXCEPTION_OCCURRED_STATUS_CODE,
								"Column name not found.",
								null
						),
						HttpStatus.OK);
			}

			for (int i = 1; i < sheet.getPhysicalNumberOfRows(); i++) {
				Row row = sheet.getRow(i);
				if (row != null) {
					Cell nameCell = row.getCell(columnIndex);
					if (nameCell != null && nameCell.getCellType() == CellType.STRING) {
						names.add(nameCell.getStringCellValue().substring(19));
					}
				}
			}

			return new ResponseEntity<>(
				new GeneralResponse(
						true,
						AppConstants.RESPONSE_SUCCESS_STATUS_CODE,
						"Data Fetched Successfully",
						names
				),
					HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(
					new GeneralResponse(
							true,
							AppConstants.RESPONSE_SUCCESS_STATUS_CODE,
							"Unable to fetch data",
							null
					),
					HttpStatus.OK);
		}
	}


	@PostMapping(
			value = "/github-user-data/download-excel",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	public void getExcelFile(
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
