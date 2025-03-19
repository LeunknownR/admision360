package pe.edu.howards.admision360_backend.service;

import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;
import com.linuxense.javadbf.DBFReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import pe.edu.howards.admision360_backend.entity.ApplicantAnswers;
import pe.edu.howards.admision360_backend.entity.ApplicantIdentification;
import pe.edu.howards.admision360_backend.entity.ApplicantScore;
import pe.edu.howards.admision360_backend.repository.AdmissionExamRepository;
import pe.edu.howards.admision360_backend.request.QualifyExamRequest;
import pe.edu.howards.admision360_backend.response.QualifyExamsResponse;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.*;

@Component
public class QualifyExamsUseCase {
    @Value("${domain.currentAcademicPeriodId}")
    private String currentAcademicPeriodId;
    private final AdmissionExamRepository admissionExamRepository;
    @Autowired
    public QualifyExamsUseCase(AdmissionExamRepository admissionExamRepository) {
        this.admissionExamRepository = admissionExamRepository;
    }
    public QualifyExamsResponse run(QualifyExamRequest request) {
        var identifications = processIdentificationDbf(request.getIdentificationDbfBase64());
        var answers = processAnswersDbf(request.getAnswersDbfBase64());
        var applicantScoreResults = calculateApplicantScore(identifications, answers);
        String pdfBase64 = createPdfWithScores(applicantScoreResults);
        return new QualifyExamsResponse(pdfBase64);
    }
    private ArrayList<ApplicantScore> calculateApplicantScore(ArrayList<ApplicantIdentification> identifications, ArrayList<ApplicantAnswers> answersBundle) {
        ArrayList<ApplicantScore> applicantScores = new ArrayList<>();
        for (var identification : identifications) {
            for (var answersOfApplicant : answersBundle) {
                if (!Objects.equals(identification.getLithoCode(), answersOfApplicant.getLithoCode()))
                    continue;
                // Genera un número aleatorio entre 0 y 20 con 3 decimales
                double score = Math.round((Math.random() * 20) * 1000.0) / 1000.0;
                applicantScores.add(new ApplicantScore(identification.getApplicantCode(), score));
            }
        }
        return applicantScores;
    }
    private String createPdfWithScores(ArrayList<ApplicantScore> scores) {
        try {
            // Usar ByteArrayOutputStream en lugar de un archivo
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf, PageSize.A4);

            // Agregar título
            Paragraph title = new Paragraph("Resultados del examen de admisión");
            title.setFontSize(16);
            title.setBold();
            title.setTextAlignment(TextAlignment.CENTER);
            document.add(title);
            document.add(new Paragraph(" ")); // Espacio

            // Crear tabla
            Table table = new Table(UnitValue.createPercentArray(new float[]{1, 1}));
            table.setWidth(UnitValue.createPercentValue(100));

            // Agregar encabezados
            Cell headerCell1 = new Cell().add(new Paragraph("Código de postulante"));
            Cell headerCell2 = new Cell().add(new Paragraph("Puntuación"));

            headerCell1.setTextAlignment(TextAlignment.CENTER);
            headerCell2.setTextAlignment(TextAlignment.CENTER);
            headerCell1.setBold();
            headerCell2.setBold();

            table.addHeaderCell(headerCell1);
            table.addHeaderCell(headerCell2);

            // Agregar datos
            for (ApplicantScore score : scores) {
                Cell cell1 = new Cell().add(new Paragraph(score.getApplicantCode()));
                Cell cell2 = new Cell().add(new Paragraph(String.valueOf(score.getScore())));

                cell1.setTextAlignment(TextAlignment.CENTER);
                cell2.setTextAlignment(TextAlignment.CENTER);

                table.addCell(cell1);
                table.addCell(cell2);
            }

            // Añadir tabla al documento
            document.add(table);

            // Cerrar documento
            document.close();

            // Convertir a Base64
            String base64Pdf = Base64.getEncoder().encodeToString(baos.toByteArray());

            System.out.println("El PDF ha sido generado correctamente en formato Base64");

            return base64Pdf;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    private ArrayList<ApplicantIdentification> processIdentificationDbf(String base64Content) {
        ArrayList<ApplicantIdentification> map = new ArrayList<>();
        byte[] dbfData = Base64.getDecoder().decode(base64Content);
        try (DBFReader reader = new DBFReader(new ByteArrayInputStream(dbfData))) {
            reader.setCharactersetName("ISO-8859-1"); // o UTF-8, dependiendo del encoding del archivo
            // Leer los datos
            Object[] rowValues;
            while ((rowValues = reader.nextRecord()) != null) {
                String lithoCode = rowValues[0].toString().trim();
                if (lithoCode.length() == 0)
                    continue;;
                String model = rowValues[1].toString().trim();
                String applicantCode = rowValues[2].toString().trim();

                map.add(new ApplicantIdentification(lithoCode, applicantCode));
            }
        }
        return map;
    }
    private ArrayList<ApplicantAnswers> processAnswersDbf(String base64Content) {
        ArrayList<ApplicantAnswers> map = new ArrayList<>();
        byte[] dbfData = Base64.getDecoder().decode(base64Content);

        try (DBFReader reader = new DBFReader(new ByteArrayInputStream(dbfData))) {
            reader.setCharactersetName("ISO-8859-1"); // o UTF-8, dependiendo del encoding del archivo

            // Leer los datos
            Object[] rowValues;
            while ((rowValues = reader.nextRecord()) != null) {
                String lithoCode = rowValues[0].toString().trim();
                if (lithoCode.length() == 0)
                    continue;;
                String model = rowValues[1].toString().trim();

                List<String> answers = new ArrayList<>();
                for (int i = 3; i < rowValues.length; i++) {
                    String answer = rowValues[i].toString();
                    if (answer.length() <= 1)
                        answers.add(answer.length() > 0 ? answer : null);
                }
                map.add(new ApplicantAnswers(lithoCode, model, answers));
            }
        }

        return map;
    }
}
