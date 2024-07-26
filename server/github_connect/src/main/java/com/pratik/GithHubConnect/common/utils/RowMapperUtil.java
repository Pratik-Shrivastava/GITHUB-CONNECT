package com.pratik.GithHubConnect.common.utils;

import com.pratik.GithHubConnect.common.model.GitHubUserData;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.ByteArrayOutputStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Objects;

public class RowMapperUtil {

	GitHubUserData gitHubUserData;
	
	@Nullable
	public static String getString(@NotNull ResultSet resultSet, String keyName) throws SQLException {
		String data = resultSet.getString(keyName);
		return Objects.equals(data, "null") ? null : data;
	}

	public static int findColumnIndex(Row headerRow, String columnName) {
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


	public static byte[] convertGitHubDataToExcel(List<GitHubUserData> gitHubUserDataList) throws Exception {

		Workbook workbook = new HSSFWorkbook();

		Sheet sheet = workbook.createSheet("GitHUb User Data");

		Row headerRow = sheet.createRow(0);

		headerRow.createCell(0).setCellValue("Sl. No.");
		headerRow.createCell(1).setCellValue("Name");
		headerRow.createCell(2).setCellValue("Languages");
		headerRow.createCell(3).setCellValue("Location");
		headerRow.createCell(4).setCellValue("Activities");
		headerRow.createCell(5).setCellValue("Current Company");
		headerRow.createCell(6).setCellValue("Number Of Repository");
		headerRow.createCell(7).setCellValue("Followers");
		headerRow.createCell(8).setCellValue("Following");

		// Start data rows from second row
		int rowIndex = 1;
		for (GitHubUserData gitHubUserData : gitHubUserDataList) {
			Row dataRow = sheet.createRow(rowIndex);

			//	Set data for each column based on GitHubUserData fields
			dataRow.createCell(0).setCellValue(rowIndex++);
			dataRow.createCell(1).setCellValue(gitHubUserData.getName());
			dataRow.createCell(2).setCellValue(gitHubUserData.getLanguages());
			dataRow.createCell(3).setCellValue(gitHubUserData.getLocation());
			dataRow.createCell(4).setCellValue(gitHubUserData.getActivities());
			dataRow.createCell(5).setCellValue(gitHubUserData.getCurrentCompany());
			dataRow.createCell(6).setCellValue(gitHubUserData.getNumberOfRepository());
			dataRow.createCell(7).setCellValue(gitHubUserData.getFollowers());
			dataRow.createCell(8).setCellValue(gitHubUserData.getFollowing());

		}
		// Write the workbook to a byte array
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		workbook.write(out);
		return out.toByteArray();
	}
}
