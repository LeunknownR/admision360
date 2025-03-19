package pe.edu.howards.admision360_backend.entity;

import java.util.List;

public class ApplicantAnswers {
    private String lithoCode;
    private String model;
    private List<String> answers;
    public ApplicantAnswers(String lithoCode, String model, List<String> answers) {
        this.lithoCode = lithoCode;
        this.model = model;
        this.answers = answers;
    }
    public String getLithoCode() {
        return lithoCode;
    }
    public String getModel() {
        return model;
    }
    public List<String> getAnswers() {
        return answers;
    }
}
