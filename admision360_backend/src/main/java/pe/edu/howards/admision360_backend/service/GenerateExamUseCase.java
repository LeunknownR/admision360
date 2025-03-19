package pe.edu.howards.admision360_backend.service;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.AreaBreak;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import pe.edu.howards.admision360_backend.entity.*;
import pe.edu.howards.admision360_backend.file.FileSystemType;
import pe.edu.howards.admision360_backend.repository.AdmissionExamRepository;
import pe.edu.howards.admision360_backend.request.GenerationExamRequest;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Component
public class GenerateExamUseCase {
    private final AdmissionExamRepository admissionExamRepository;
    @Autowired
    public GenerateExamUseCase(AdmissionExamRepository admissionExamRepository) {
        this.admissionExamRepository = admissionExamRepository;
    }
    public List<BankQuestion> getBankQuestions(String questionBankBase64) {
        byte[] decodedBytes = Base64.getDecoder().decode(questionBankBase64);

        List<BankQuestion> questions = new ArrayList<>();

        try (CSVReader reader = new CSVReader(new InputStreamReader(new ByteArrayInputStream(decodedBytes), StandardCharsets.UTF_8))) {
            // Skip header line
            reader.skip(1);

            List<String[]> records = reader.readAll();
            for (String[] fields : records) {
                BankQuestion question = new BankQuestion(
                        Integer.parseInt(fields[0]),
                        fields[1],
                        fields[2],
                        fields[3],
                        fields[4],
                        fields[5],
                        fields[6],
                        fields[7],
                        fields[8],
                        fields[9]
                );
                questions.add(question);
            }
        } catch (IOException | CsvException e) {
            throw new RuntimeException("Error processing CSV content", e);
        }
        return questions;
    }
    public Map<String, List<BankQuestion>> getBankQuestionsBySection(List<BankQuestion> questions) {
        Map<String, List<BankQuestion>> bankQuestionBySection = new HashMap<>();
        for (var question : questions) {
            String section = question.getSection();
            var bankQuestion = bankQuestionBySection.get(section);
            if (bankQuestion == null) {
                bankQuestionBySection.put(section, new ArrayList<>());
                continue;
            }
            bankQuestion.add(question);
        }
        return bankQuestionBySection;
    }
    public int generateExams(String academicPeriodId, String area, int modelAsciiCode, Map<String, List<BankQuestion>> questions) {
        ArrayList<AdmissionExam> exams = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {
            String model = String.valueOf((char) modelAsciiCode);
            String examPdfFilename = FileSystemType.PDF.randomFilename();;
            var examSections = generateExam(examPdfFilename, area, model, questions);
            exams.add(new AdmissionExam(area, model, examPdfFilename, examSections));
            modelAsciiCode++;
        }
        admissionExamRepository.saveExams(academicPeriodId, exams);
        return modelAsciiCode;
    }
    private Image getImageToPdf(String filename) {
        try {
            String photoFilename = "uploads/images/" + filename;
            File imageFile = new File(photoFilename);

            // Verificar si el archivo existe
            if (!imageFile.exists()) {
                System.err.println("La imagen no existe: " + photoFilename);
                return null;
            }

            // Crear la imagen
            ImageData data = ImageDataFactory.create(photoFilename);
            Image image = new Image(data);

            // Establecer un ancho máximo razonable para el documento
            // Ajusta estos valores según el tamaño de tu página
            float maxWidth = 450f; // Por ejemplo, para una página A4 con márgenes
            float maxHeight = 600f; // Altura máxima recomendada

            // Obtener dimensiones originales
            float originalWidth = image.getImageWidth();
            float originalHeight = image.getImageHeight();

            // Calcular ratio de aspecto
            float aspectRatio = originalWidth / originalHeight;

            // Escalar la imagen manteniendo la proporción
            if (originalWidth > maxWidth || originalHeight > maxHeight) {
                if (originalWidth / maxWidth > originalHeight / maxHeight) {
                    // Si el ancho es la dimensión que excede más
                    image.setWidth(maxWidth);
                    image.setHeight(maxWidth / aspectRatio);
                } else {
                    // Si la altura es la dimensión que excede más
                    image.setHeight(maxHeight);
                    image.setWidth(maxHeight * aspectRatio);
                }
            }

            // Establecer alineación y otras propiedades
            image.setHorizontalAlignment(HorizontalAlignment.CENTER);

            // Opcional: agregar un pequeño margen
            image.setMarginTop(5);
            image.setMarginBottom(5);

            return image;
        }
        catch (Exception ex) {
            System.err.println("Error al procesar la imagen " + filename + ": " + ex.getMessage());
            ex.printStackTrace();
            return null;
        }
    }
    private List<ExamSection> generateExam(String filename, String area, String model, Map<String, List<BankQuestion>> questions) {
        try {
            File uploadsDir = new File("uploads");
            if (!uploadsDir.exists())
                uploadsDir.mkdir();

            PdfWriter writer = new PdfWriter("uploads/" + filename);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            document.add(new Paragraph("EXAMEN DE ADMISIÓN - " + area + " - MODELO " + model).setBold());
            document.add(new Paragraph("Total de preguntas: 100"));

            int questionNumber = 1;
            List<ExamSection> examSections = new ArrayList<>();
            // Iterar sobre cada sección y seleccionar preguntas aleatorias
            for (var entry : questions.entrySet()) {
                String section = entry.getKey();
                int questionsNeeded = ExamSection.getQuestionQuantityBySection(section);
                var bankQuestions = entry.getValue();

                List<BankQuestion> selectedQuestions = selectRandomQuestions(bankQuestions, questionsNeeded);
                var examSection = new ExamSection(section);

                // Agregar título de sección
                document.add(new Paragraph("\n" + section).setBold());

                // Agregar preguntas seleccionadas
                for (var question : selectedQuestions) {
                    examSection.add(new ExamQuestion(question));
                    document.add(new Paragraph(questionNumber + ". " + question.getQuestion()));
                    document.add(new Paragraph("A) " + question.getA()));
                    document.add(new Paragraph("B) " + question.getB()));
                    document.add(new Paragraph("C) " + question.getC()));
                    document.add(new Paragraph("D) " + question.getD()));
                    document.add(new Paragraph("E) " + question.getE()));

                    // Modificación aquí para escalar y manejar imágenes correctamente
                    if (question.getPhoto() != null) {
                        try {
                            Image photo = getImageToPdf(question.getPhoto());

                            // Calcular el ancho disponible (ajustado a márgenes)
                            float pageWidth = pdf.getDefaultPageSize().getWidth();
                            float margin = 35; // Ajustar según tus márgenes
                            float availableWidth = pageWidth - 2 * margin;

                            // Escalar la imagen al ancho disponible manteniendo proporción
                            photo.scaleToFit(availableWidth, 1000);

                            // Si la imagen es aún muy grande, añade un salto de página antes
                            if (photo.getImageHeight() > 400) { // Ajusta este valor según necesites
                                document.add(new AreaBreak());
                            }

                            document.add(photo);
                        } catch (Exception e) {
                            // Loguear el error pero continuar con el documento
                            System.err.println("Error al añadir imagen: " + e.getMessage());
                            document.add(new Paragraph("*Imagen no disponible*").setItalic());
                        }
                    }

                    document.add(new Paragraph("\n"));
                    questionNumber++;
                }
                examSections.add(examSection);
            }
            document.close();
            return examSections;
        } catch (Exception e) {
            throw new RuntimeException("Error generating exam " + model, e);
        }
    }
    private List<BankQuestion> selectRandomQuestions(List<BankQuestion> questions, int count) {
        if (questions.size() < count) {
            throw new IllegalStateException("No hay suficientes preguntas en el banco para la sección");
        }

        List<BankQuestion> shuffled = new ArrayList<>(questions);
        Collections.shuffle(shuffled);
        return shuffled.subList(0, count);
    }
    public boolean run(GenerationExamRequest request) {
        List<BankQuestion> questions = getBankQuestions(request.getQuestionBankBase64());
        var bankQuestions = getBankQuestionsBySection(questions);
        int modelAsciiCode = 65;
        for (var area : AdmissionExamArea.VALUES) {
            modelAsciiCode = generateExams(request.getAcademicPeriodId(), area, modelAsciiCode, bankQuestions);
        }
        admissionExamRepository.saveQuestionBank(request.getAcademicPeriodId(), questions);
        return true;
    }
}
