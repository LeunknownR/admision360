package pe.edu.howards.admision360_backend.request;

public class GenerationExamRequest {
    private String academicPeriodId;
    private String questionBankBase64;
    public GenerationExamRequest(String academicPeriodId, String questionBankBase64) {
        this.academicPeriodId = academicPeriodId;
        this.questionBankBase64 = questionBankBase64;
    }
    public String getAcademicPeriodId() {
        return academicPeriodId;
    }
    public String getQuestionBankBase64() {
        return questionBankBase64;
    }
}
