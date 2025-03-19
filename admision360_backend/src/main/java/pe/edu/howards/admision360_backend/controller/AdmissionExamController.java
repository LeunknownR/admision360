package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.entity.AreaExamModel;
import pe.edu.howards.admision360_backend.request.GenerationExamRequest;
import pe.edu.howards.admision360_backend.request.QualifyExamRequest;
import pe.edu.howards.admision360_backend.response.QualifyExamsResponse;
import pe.edu.howards.admision360_backend.service.GenerateExamUseCase;
import pe.edu.howards.admision360_backend.service.GetAllExamModelsUseCase;
import pe.edu.howards.admision360_backend.service.QualifyExamsUseCase;

import java.util.List;

@CrossOrigin
@RestController
public class AdmissionExamController {
    private final GenerateExamUseCase generateExamUseCase;
    private final GetAllExamModelsUseCase getAllExamModelsUseCase;
    private final QualifyExamsUseCase qualifyExamsUseCase;
    @Autowired
    public AdmissionExamController(GenerateExamUseCase generateExamUseCase, GetAllExamModelsUseCase getAllExamModelsUseCase, QualifyExamsUseCase qualifyExamsUseCase) {
        this.generateExamUseCase = generateExamUseCase;
        this.getAllExamModelsUseCase = getAllExamModelsUseCase;
        this.qualifyExamsUseCase = qualifyExamsUseCase;
    }
    @PostMapping("generate-exams")
    public ResponseEntity<ResponseDTO<Object>> generateExams(@RequestBody GenerationExamRequest request) {
        boolean success = generateExamUseCase.run(request);
        if (success) {
            return ResponseEntity.ok(new ResponseDTO<>(null, "SUCCESS"));
        }
        return ResponseEntity.ok(new ResponseDTO<>(null, "ERROR_TO_GENERATE_EXAMS"));
    }
    @PostMapping("/qualify-exams")
    public ResponseEntity<ResponseDTO<QualifyExamsResponse>> qualifyExams(@RequestBody QualifyExamRequest request) {
        var response = qualifyExamsUseCase.run(request);
        if (response != null) {
            return ResponseEntity.ok(new ResponseDTO<>(response, "SUCCESS"));
        }
        return ResponseEntity.ok(new ResponseDTO<>(null, "ERROR_TO_QUALIFY_EXAMS"));
    }
    @GetMapping("all-exams-models/{academicPeriodId}")
    public ResponseEntity<ResponseDTO<List<AreaExamModel>>> getAllExams(@PathVariable String academicPeriodId) {
        var allExamModels = getAllExamModelsUseCase.run(academicPeriodId);
        return ResponseEntity.ok(new ResponseDTO<>(allExamModels));
    }
}
