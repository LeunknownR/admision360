package pe.edu.howards.admision360_backend.file;

import java.util.UUID;

public enum FileSystemType {
    PDF("pdf");
    public final String extension;
    FileSystemType(String extension) {
        this.extension = extension;
    }
    public String randomFilename() {
        return UUID.randomUUID() + "." + extension;
    }
}
