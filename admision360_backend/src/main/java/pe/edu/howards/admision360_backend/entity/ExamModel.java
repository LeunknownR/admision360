package pe.edu.howards.admision360_backend.entity;

public class ExamModel {
    private int id;
    private String model;
    private String examUrl;
    public ExamModel(int id, String model, String filename) {
        this.id = id;
        this.model = model;
        this.examUrl = "http://localhost:8080/uploads/" + filename;
    }
    public int getId() {
        return id;
    }
    public String getModel() {
        return model;
    }
    public String getExamUrl() {
        return examUrl;
    }
}
