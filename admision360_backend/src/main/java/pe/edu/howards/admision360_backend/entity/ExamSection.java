package pe.edu.howards.admision360_backend.entity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ExamSection {
    private static final Map<String, Integer> QUESTION_DISTRIBUTION = new HashMap<>() {{ 
        put("BIOLOGÍA", 8); 
        put("QUÍMICA", 6); 
        put("FÍSICA", 6); 
        put("FILOSOFÍA", 2); 
        put("ECONOMÍA", 2); 
        put("GEOGRAFÍA", 2); 
        put("HISTORIA UNIVERSAL", 2); 
        put("HISTORIA DEL PERÚ", 2); 
        put("EDUCACIÓN CIVICA", 2);
        put("PSICOLOGÍA", 2);
        put("LITERATURA", 3); 
        put("LENGUAJE", 3); 
        put("TRIGONOMETRÍA", 5); 
        put("GEOMETRÍA", 5); 
        put("ÁLGEBRA", 5);
        put("ARITMÉTICA", 5); 
        put("HABILIDAD VERBAL", 20); 
        put("HABILIDAD LÓGICO MATEMÁTICO", 20); 
    }};
    private String section;
    private List<ExamQuestion> questions;
    public ExamSection(String section) {
        this.section = section;
        this.questions = new ArrayList<>();
    }
    public void add(ExamQuestion question) {
        this.questions.add(question);
    }
    public static int getQuestionQuantityBySection(String section) {
        return QUESTION_DISTRIBUTION.get(section);
    }
    public String getSection() {
        return section;
    }
    public List<ExamQuestion> getQuestions() {
        return questions;
    }
}
