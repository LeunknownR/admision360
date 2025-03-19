package pe.edu.howards.admision360_backend.entity;

import java.util.ArrayList;
import java.util.List;

public class AdmissionExamArea {
    static final String HUMANITIES = "Humanidades";
    static final String HEALTH_SCIENCES = "Ciencias de la Salud";
    static final String ENGINEERING = "Ingeniería";
    public static final List<String> VALUES = new ArrayList<>() {{
        add(HUMANITIES);
        add(HEALTH_SCIENCES);
        add(ENGINEERING);
    }};
}
