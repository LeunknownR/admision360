package pe.edu.howards.admision360_backend.entity;

public class ApplicantIdentification {
    private String lithoCode;
    private String applicantCode;
    public ApplicantIdentification(String lithoCode, String applicantCode) {
        this.lithoCode = lithoCode;
        this.applicantCode = applicantCode;
    }
    public String getLithoCode() {
        return lithoCode;
    }
    public String getApplicantCode() {
        return applicantCode;
    }
}
