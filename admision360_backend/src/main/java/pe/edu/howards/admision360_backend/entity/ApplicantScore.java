package pe.edu.howards.admision360_backend.entity;

public class ApplicantScore {
    private String applicantCode;
    private double score;
    public ApplicantScore(String applicantCode, double score) {
        this.applicantCode = applicantCode;
        this.score = score;
    }
    public String getApplicantCode() {
        return applicantCode;
    }
    public double getScore() {
        return score;
    }
}
