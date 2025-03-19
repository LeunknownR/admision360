package pe.edu.howards.admision360_backend.request;

public class QualifyExamRequest {
    private String identificationDbfBase64;
    private String answersDbfBase64;
    public QualifyExamRequest(String identificationDbfBase64, String answersDbfBase64) {
        this.identificationDbfBase64 = identificationDbfBase64;
        this.answersDbfBase64 = answersDbfBase64;
    }
    public String getAnswersDbfBase64() {
        return answersDbfBase64;
    }
    public String getIdentificationDbfBase64() {
        return identificationDbfBase64;
    }
}
