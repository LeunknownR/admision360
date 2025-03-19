package pe.edu.howards.admision360_backend.entity;

import java.util.List;

public class AdmissionExam {
    private String area;
    private String model;
    private String filename;
    private List<ExamSection> sections;
    public AdmissionExam(String area, String model, String filename, List<ExamSection> sections) {
        this.area = area;
        this.model = model;
        this.filename = filename;
        this.sections = sections;
    }
    public String getArea() {
        return area;
    }
    public String getModel() {
        return model;
    }
    public String getFilename() {
        return filename;
    }
    public List<ExamSection> getSections() {
        return sections;
    }
}
