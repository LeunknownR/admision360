package pe.edu.howards.admision360_backend.response;

public class QualifyExamsResponse {
    private String qualifiedExamsBase64;
    public QualifyExamsResponse(String qualifiedExamsBase64) {
        this.qualifiedExamsBase64 = qualifiedExamsBase64;
    }
    public String getQualifiedExamsBase64() {
        return qualifiedExamsBase64;
    }
}
