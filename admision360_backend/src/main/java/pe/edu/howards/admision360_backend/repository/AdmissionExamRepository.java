package pe.edu.howards.admision360_backend.repository;

import pe.edu.howards.admision360_backend.entity.AdmissionExam;
import pe.edu.howards.admision360_backend.entity.AreaExamModel;
import pe.edu.howards.admision360_backend.entity.BankQuestion;

import java.util.List;

public interface AdmissionExamRepository {
    void saveQuestionBank(String academicPeriodId, List<BankQuestion> questions);
    void saveExams(String academicPeriodId, List<AdmissionExam> exams);
    List<AreaExamModel> getAllExamModels(String academicPeriodId);
}
