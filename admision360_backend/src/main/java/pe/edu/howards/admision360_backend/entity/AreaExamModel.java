package pe.edu.howards.admision360_backend.entity;

import java.util.ArrayList;
import java.util.List;

public class AreaExamModel {
    private String area;
    private List<ExamModel> models;
    public AreaExamModel(String area) {
        this.area = area;
        this.models = new ArrayList<>();
    }
    public String getArea() {
        return area;
    }
    public List<ExamModel> getModels() {
        return models;
    }
    public void addModel(ExamModel examModel) {
        models.add(examModel);
    }
}
