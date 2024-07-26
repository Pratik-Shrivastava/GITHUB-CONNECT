package com.pratik.GithHubConnect.excel.controller;

import com.pratik.GithHubConnect.common.model.GeneralResponse;
import com.pratik.GithHubConnect.constants.AppConstants;
import org.apache.poi.ss.usermodel.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.ArrayList;
import java.util.List;

@RestController
public class ExcelController {

	@PostMapping("/upload-excel")
	public Object getGitHubLinksFromExcel(@RequestParam("file") MultipartFile file,
												   @RequestParam(value = "columnName", required = false) String columnName) {
		try {
			Workbook workbook = WorkbookFactory.create(file.getInputStream());
			Sheet sheet = workbook.getSheetAt(0); // Assuming data is in the first sheet

			List<String> names = new ArrayList<>();
			int columnIndex = findColumnIndex(sheet.getRow(0), columnName);

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

	private int findColumnIndex(Row headerRow, String columnName) {
		if (columnName == null) {
			return 0; // Default to first column
		}

		for (int i = 0; i < headerRow.getLastCellNum(); i++) {
			Cell cell = headerRow.getCell(i);
			if (cell != null && cell.getCellType() == CellType.STRING && cell.getStringCellValue().equalsIgnoreCase(columnName))
			{
				return i;
			}
		}
		return -1;
	}
}
