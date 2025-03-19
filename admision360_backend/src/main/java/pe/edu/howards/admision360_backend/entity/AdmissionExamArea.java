package pe.edu.howards.admision360_backend.entity;

import java.util.ArrayList;
import java.util.HashMap;
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
    public static final HashMap<String, HashMap<String, Integer>> SCORE_BY_AREA_AND_SECTION = new HashMap<>() {{
        put(AdmissionExamArea.HUMANITIES, new HashMap<>() {{
            put("BIOLOGÍA", 2);
            put("QUÍMICA", 2);
            put("FÍSICA", 2);
            put("FILOSOFÍA", 6);
            put("ECONOMÍA", 2);
            put("GEOGRAFÍA", 2);
            put("HISTORIA UNIVERSAL", 2);
            put("HISTORIA DEL PERÚ", 2);
            put("EDUCACIÓN CIVICA", 6);
            put("PSICOLOGÍA", 6);
            put("LITERATURA", 6);
            put("LENGUAJE", 6);
            put("TRIGONOMETRÍA", 2);
            put("GEOMETRÍA", 2);
            put("ÁLGEBRA", 2);
            put("ARITMÉTICA", 2);
            put("HABILIDAD VERBAL", 4);
            put("HABILIDAD LÓGICO MATEMÁTICO", 4);
        }});
        put(AdmissionExamArea.HEALTH_SCIENCES, new HashMap<>() {{
            put("BIOLOGÍA", 6);
            put("QUÍMICA", 6);
            put("FÍSICA", 6);
            put("FILOSOFÍA", 2);
            put("ECONOMÍA", 6);
            put("GEOGRAFÍA", 6);
            put("HISTORIA UNIVERSAL", 6);
            put("HISTORIA DEL PERÚ", 6);
            put("EDUCACIÓN CIVICA", 2);
            put("PSICOLOGÍA", 2);
            put("LITERATURA", 2);
            put("LENGUAJE", 2);
            put("TRIGONOMETRÍA", 2);
            put("GEOMETRÍA", 2);
            put("ÁLGEBRA", 2);
            put("ARITMÉTICA", 2);
            put("HABILIDAD VERBAL", 4);
            put("HABILIDAD LÓGICO MATEMÁTICO", 4);
        }});
        put(AdmissionExamArea.ENGINEERING, new HashMap<>() {{
            put("BIOLOGÍA", 2);
            put("QUÍMICA", 2);
            put("FÍSICA", 2);
            put("FILOSOFÍA", 2);
            put("ECONOMÍA", 2);
            put("GEOGRAFÍA", 2);
            put("HISTORIA UNIVERSAL", 2);
            put("HISTORIA DEL PERÚ", 2);
            put("EDUCACIÓN CIVICA", 2);
            put("PSICOLOGÍA", 2);
            put("LITERATURA", 2);
            put("LENGUAJE", 2);
            put("TRIGONOMETRÍA", 6);
            put("GEOMETRÍA", 6);
            put("ÁLGEBRA", 6);
            put("ARITMÉTICA", 6);
            put("HABILIDAD VERBAL", 4);
            put("HABILIDAD LÓGICO MATEMÁTICO", 4);
        }});
    }};
}
