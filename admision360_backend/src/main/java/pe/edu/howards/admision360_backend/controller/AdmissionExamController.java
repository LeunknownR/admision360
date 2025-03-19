package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.entity.AreaExamModel;
import pe.edu.howards.admision360_backend.request.GenerationExamRequest;
import pe.edu.howards.admision360_backend.service.GenerateExamUseCase;
import pe.edu.howards.admision360_backend.service.GetAllExamModelsUseCase;

import java.util.List;

@CrossOrigin
@RestController
public class AdmissionExamController {
    private final GenerateExamUseCase generateExamUseCase;
    private final GetAllExamModelsUseCase getAllExamModelsUseCase;
    @Autowired
    public AdmissionExamController(GenerateExamUseCase generateExamUseCase, GetAllExamModelsUseCase getAllExamModelsUseCase) {
        this.generateExamUseCase = generateExamUseCase;
        this.getAllExamModelsUseCase = getAllExamModelsUseCase;
    }
    @PostMapping("generate-exams")
    public ResponseEntity<ResponseDTO<Object>> generateExams(@RequestBody GenerationExamRequest request) {
        boolean success = generateExamUseCase.run(request);
        if (success) {
            return ResponseEntity.ok(new ResponseDTO<>(null, "SUCCESS"));
        } else {
            return ResponseEntity.ok(new ResponseDTO<>(null, "ERROR_TO_GENERATE_EXAMS"));
        }
    }
    @GetMapping("all-exams-models/{academicPeriodId}")
    public ResponseEntity<ResponseDTO<List<AreaExamModel>>> getAllExams(@PathVariable String academicPeriodId) {
        var allExamModels = getAllExamModelsUseCase.run(academicPeriodId);
        return ResponseEntity.ok(new ResponseDTO<>(allExamModels));
    }
}
