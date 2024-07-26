package com.pratik.GithHubConnect.common.utils;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Objects;

public class RowMapperUtil {
	
	@Nullable
	public static String getString(@NotNull ResultSet resultSet, String keyName) throws SQLException {
		String data = resultSet.getString(keyName);
		return Objects.equals(data, "null") ? null : data;
	}
}
