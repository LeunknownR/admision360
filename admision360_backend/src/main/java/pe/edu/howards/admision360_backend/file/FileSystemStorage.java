package pe.edu.howards.admision360_backend.file;

import org.springframework.stereotype.Component;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;
import java.util.UUID;

@Component
public class FileSystemStorage {
    public void save(String filename, String base64) {
        try {
            // Decode base64 string
            byte[] decodedBytes = Base64.getDecoder().decode(base64);

            // Create uploads directory if it doesn't exist
            File uploadsDir = new File("uploads");
            if (!uploadsDir.exists())
                uploadsDir.mkdir();

            // Write file
            File file = new File("uploads/" + filename);
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(decodedBytes);
            fos.close();
        } catch (Exception e) {
            throw new RuntimeException("Error saving file", e);
        }
    }
}
