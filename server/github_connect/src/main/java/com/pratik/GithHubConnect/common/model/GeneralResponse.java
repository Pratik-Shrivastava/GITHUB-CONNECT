package com.pratik.GithHubConnect.common.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GeneralResponse {
	
	boolean status;
	int status_code;
	String message;
	Object data;
}
