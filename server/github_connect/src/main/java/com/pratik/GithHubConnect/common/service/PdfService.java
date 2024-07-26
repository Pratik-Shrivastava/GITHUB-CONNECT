package com.pratik.GithHubConnect.common.service;

import org.springframework.stereotype.Service;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

@Service
public class PdfService {
	
	public ByteArrayInputStream convertHtmlToPdf(String htmlContent) {
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		ITextRenderer renderer = new ITextRenderer();
		renderer.setDocumentFromString(htmlContent);
		renderer.layout();
		renderer.createPDF(outputStream, false);
		renderer.finishPDF();
		return new ByteArrayInputStream(outputStream.toByteArray());
	}
}
