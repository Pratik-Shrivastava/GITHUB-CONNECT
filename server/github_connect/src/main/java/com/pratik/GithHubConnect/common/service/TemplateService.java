package com.pratik.GithHubConnect.common.service;


import com.pratik.GithHubConnect.config.Settings;
import lombok.AllArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
@AllArgsConstructor(onConstructor_ = @__({@Autowired}))
public class TemplateService {
	
	private final TemplateEngine templateEngine;
	private final Settings settings;



//	public String generateAnnexureDiTemplate(@NotNull AnnexureDFormData annexureDFormData) {
//
//		Context context = new Context();
//
//		context.setVariable("weaverName", annexureDFormData.getWeaverName());
//
//		String fullAddress = annexureDFormData.getAddressLine1() + " " + annexureDFormData.getAddressLine2() +
//				" " + annexureDFormData.getCity() + " " + annexureDFormData.getState() + " " +
//				annexureDFormData.getPincode() + " " + annexureDFormData.getCountry();
//
//		context.setVariable("address", fullAddress);
//
//
//		context.setVariable("numberOfLooms", annexureDFormData.getNumberOfLooms());
//
//		StringBuilder newColumn = new StringBuilder();
//		int count = 1;
//		Long totalPrice = 0L;
//
//		for(AnnexureDIFormData annexureDIFormData: annexureDFormData.getAnnexureDIFormDataList()) {
//			newColumn.append("<tr><td>");
//			newColumn.append(count);
//			newColumn.append("</td>");
//			newColumn.append("<td>");
//			newColumn.append(annexureDIFormData.getReplaceItemName());
//			newColumn.append("</td>");
//			newColumn.append("<td>");
//			newColumn.append(annexureDIFormData.getVoucherNumber());
//			newColumn.append("</td>");
//			newColumn.append("<td>");
//			newColumn.append(annexureDIFormData.getDate());
//			newColumn.append("</td>");
//			newColumn.append("<td>");
//			newColumn.append(annexureDIFormData.getPrice());
//			newColumn.append("</td></tr>");
//			totalPrice += annexureDIFormData.getPrice();
//			count++;
//		}
//
//		String column = newColumn.toString();
//
//		context.setVariable("column", column);
//
//		context.setVariable("totalPrice", totalPrice);
//
//		return templateEngine.process("AnnexureDiTemplate", context);
//	}


}
