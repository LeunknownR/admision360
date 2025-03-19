package pe.edu.howards.admision360_backend.repository.impl;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.edu.howards.admision360_backend.database.DatabaseConnection;
import pe.edu.howards.admision360_backend.entity.*;
import pe.edu.howards.admision360_backend.repository.AdmissionExamRepository;

@Repository
public class AdmissionExamRepositoryImpl implements AdmissionExamRepository {
    private final DatabaseConnection databaseConnection;
    @Autowired
    public AdmissionExamRepositoryImpl(DatabaseConnection databaseConnection) {
        this.databaseConnection = databaseConnection;
    }
    @Override
    public void saveQuestionBank(String academicPeriodId, List<BankQuestion> questions) {
        String sql = "INSERT INTO bank_question (academic_period_id, number, question, photo, section, A, B, C, D, E, answer) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                     
        try (var connection = databaseConnection.getConnection();
             var preparedStatement = connection.prepareStatement(sql)) {
            
            connection.setAutoCommit(false);
            
            try {
                for (BankQuestion question : questions) {
                    preparedStatement.setString(1, academicPeriodId);
                    preparedStatement.setInt(2, question.getNumber());
                    preparedStatement.setString(3, question.getQuestion());
                    preparedStatement.setString(4, question.getPhoto());
                    preparedStatement.setString(5, question.getSection());
                    preparedStatement.setString(6, question.getA());
                    preparedStatement.setString(7, question.getB());
                    preparedStatement.setString(8, question.getC());
                    preparedStatement.setString(9, question.getD());
                    preparedStatement.setString(10, question.getE());
                    preparedStatement.setString(11, question.getAnswer());
                    
                    preparedStatement.addBatch();
                    
                    // Ejecutar el batch cada 100 registros para optimizar memoria
                    if ((question.getNumber() + 1) % 100 == 0) {
                        preparedStatement.executeBatch();
                    }
                }
                
                // Ejecutar cualquier registro restante
                preparedStatement.executeBatch();
                connection.commit();
                
            } catch (SQLException e) {
                connection.rollback();
                throw new RuntimeException("Error saving exam batch", e);
            }
            
        } catch (SQLException e) {
            throw new RuntimeException("Error establishing database connection", e);
        }
    }
    @Override
    public void saveExams(String academicPeriodId, List<AdmissionExam> exams) {
        String examSql = "INSERT INTO exam (area, model, filename, academic_period_id) VALUES (?, ?, ?, ?);";

        try (var connection = databaseConnection.getConnection();
             var preparedStatement = connection.prepareStatement(examSql, Statement.RETURN_GENERATED_KEYS)) {

            connection.setAutoCommit(false);

            try {
                for (AdmissionExam exam : exams) {
                    preparedStatement.setString(1, exam.getArea());
                    preparedStatement.setString(2, exam.getModel());
                    preparedStatement.setString(3, exam.getFilename());
                    preparedStatement.setString(4, academicPeriodId);
                    preparedStatement.addBatch();
                }

                preparedStatement.executeBatch();
                connection.commit();

                ResultSet rs = preparedStatement.getGeneratedKeys();
                while (rs.next()) {
                    int examId = rs.getInt(1);
                    saveExamQuestionRecords(examId, exams);
                }
            } catch (SQLException e) {
                connection.rollback();
                throw new RuntimeException("Error saving exam batch", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error establishing database connection", e);
        }
    }
    private void saveExamRecords(String academicPeriodId, List<AdmissionExam> exams) {
        String examSql = "INSERT INTO exam (area, model, filename, academic_period_id) VALUES (?, ?, ?, ?);";

        try (var connection = databaseConnection.getConnection();
             var preparedStatement = connection.prepareStatement(examSql, Statement.RETURN_GENERATED_KEYS)) {

            connection.setAutoCommit(false);

            try {
                int insertedCount = 1;
                for (AdmissionExam exam : exams) {
                    preparedStatement.setString(1, exam.getArea());
                    preparedStatement.setString(2, exam.getModel());
                    preparedStatement.setString(3, exam.getFilename());
                    preparedStatement.setString(4, academicPeriodId);
                    preparedStatement.addBatch();

                    // Ejecutar el batch cada 100 registros para optimizar memoria
                    if ((insertedCount + 1) % 100 == 0) {
                        preparedStatement.executeBatch();
                    }
                    insertedCount++;
                }

                preparedStatement.executeBatch();
                connection.commit();

                ResultSet rs = preparedStatement.getGeneratedKeys();
                if(rs.next())
                {
                    int examId = rs.getInt(1);
                    saveExamQuestionRecords(examId, exams);
                }
            } catch (SQLException e) {
                connection.rollback();
                throw new RuntimeException("Error saving exam batch", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error establishing database connection", e);
        }
    }
    private void saveExamQuestionRecords(int examId, List<AdmissionExam> exams) {
        String examQuestionSql = "INSERT INTO exam_question (exam_id, number, question, photo, section, A, B, C, D, E) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (var connection = databaseConnection.getConnection();
             var preparedStatement = connection.prepareStatement(examQuestionSql)) {

            connection.setAutoCommit(false);

            try {
                for (AdmissionExam exam : exams) {
                    int questionNumber = 1;
                    for (ExamSection examSection : exam.getSections()) {
                        for (ExamQuestion examQuestion : examSection.getQuestions()) {
                            preparedStatement.setInt(1, examId);
                            preparedStatement.setInt(2, questionNumber);
                            preparedStatement.setString(3, examQuestion.getQuestion());
                            preparedStatement.setString(4, examQuestion.getPhoto());
                            preparedStatement.setString(5, examSection.getSection());
                            preparedStatement.setString(6, examQuestion.getA());
                            preparedStatement.setString(7, examQuestion.getB());
                            preparedStatement.setString(8, examQuestion.getC());
                            preparedStatement.setString(9, examQuestion.getD());
                            preparedStatement.setString(10, examQuestion.getE());

                            preparedStatement.addBatch();

                            // Ejecutar el batch cada 100 registros para optimizar memoria
                            if ((questionNumber + 1) % 100 == 0) {
                                preparedStatement.executeBatch();
                            }
                        }
                        questionNumber++;
                    }
                }

                // Ejecutar cualquier registro restante
                preparedStatement.executeBatch();
                connection.commit();

            } catch (SQLException e) {
                connection.rollback();
                throw new RuntimeException("Error saving exam batch", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error establishing database connection", e);
        }
    }
    @Override
    public List<AreaExamModel> getAllExamModels(String academicPeriodId) {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL get_all_exam_models(?)}")) {

            statement.setString(1, academicPeriodId);

            ResultSet resultSet = statement.executeQuery();

            List<AreaExamModel> areaExamModels = new ArrayList<>();
            while (resultSet.next()) {
                String area = resultSet.getString("area");
                Optional<AreaExamModel> areaExamModelOptional = areaExamModels.stream().filter((areaExam) -> areaExam.getArea().equals(area)).findFirst();
                AreaExamModel areaExamModel;
                if (areaExamModelOptional.isEmpty()) {
                    areaExamModel = new AreaExamModel(area);
                    areaExamModels.add(areaExamModel);
                }
                else {
                    areaExamModel = areaExamModelOptional.get();
                }
                int id = resultSet.getInt("id");
                String model = resultSet.getString("model");
                String filename = resultSet.getString("filename");
                var examModel = new ExamModel(id, model, filename);
                areaExamModel.addModel(examModel);
            }
            return areaExamModels;
        } catch (SQLException e) {
            System.err.println("Error getting exam models: " + e.getMessage());
            return new ArrayList<>();
        }
    }
}
