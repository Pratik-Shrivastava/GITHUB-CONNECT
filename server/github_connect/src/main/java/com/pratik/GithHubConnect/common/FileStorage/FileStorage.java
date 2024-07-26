package com.pratik.GithHubConnect.common.FileStorage;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;

@Component
public class FileStorage {

    public boolean createDirectory(String directoryPath) {


        // Create a Path object from the specified directory path
        Path path = Paths.get(directoryPath);

        // Check if the directory already exists
        if (!Files.exists(path)) {
            try {
                // Create the directory
                Files.createDirectories(path);
            } catch (IOException e) {
                System.err.println("Failed to create directory: " + e.getMessage());
                return false;
            }
        }
        return true;
    }

    public boolean saveFile(String newFileName, MultipartFile file, String directoryPath) {

        File fileToSave = new File(directoryPath + newFileName);

        try {
            file.transferTo(fileToSave);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean deleteFile(String filePath) {

        File file = new File(filePath);
        return file.delete();
    }
}
