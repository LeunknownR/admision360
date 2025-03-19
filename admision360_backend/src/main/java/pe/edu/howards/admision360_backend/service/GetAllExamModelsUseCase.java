package pe.edu.howards.admision360_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pe.edu.howards.admision360_backend.entity.AreaExamModel;
import pe.edu.howards.admision360_backend.repository.AdmissionExamRepository;

import java.util.List;

@Component
public class GetAllExamModelsUseCase {
    private final AdmissionExamRepository admissionExamRepository;
    @Autowired
    public GetAllExamModelsUseCase(AdmissionExamRepository admissionExamRepository) {
        this.admissionExamRepository = admissionExamRepository;
    }
    public List<AreaExamModel> run(String academicPeriodId) {
        return admissionExamRepository.getAllExamModels(academicPeriodId);
    }
}
