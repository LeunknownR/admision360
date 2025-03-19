package pe.edu.howards.admision360_backend.controller;

import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin
@RestController
public class MediaController {
    private final Path uploadsDir = Paths.get("uploads").toAbsolutePath().normalize();
    @GetMapping("uploads/{filename:.+}")
    public ResponseEntity<UrlResource> downloadFile(@PathVariable String filename) {
        try {
            // Validar el nombre del archivo para prevenir directory traversal
            if (filename.contains("..")) {
                return ResponseEntity.badRequest().build();
            }
            
            Path filePath = this.uploadsDir.resolve(filename).normalize();
            UrlResource resource = new UrlResource(filePath.toUri());
            
            if (resource.exists()) {
                // Determinar el tipo de contenido
                String contentType = determineContentType(filename);
                
                // Configurar headers para descarga
                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    /**
     * Determina el tipo de contenido basado en la extensión del archivo
     */
    private String determineContentType(String filename) {
        if (filename.endsWith(".pdf")) {
            return "application/pdf";
        } else if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
            return "image/jpeg";
        } else if (filename.endsWith(".png")) {
            return "image/png";
        } else if (filename.endsWith(".txt")) {
            return "text/plain";
        } else {
            return "application/octet-stream";
        }
    }
}
