package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.request.EnrollmentRequest;
import pe.edu.howards.admision360_backend.service.enrollment.EnrollApplicantUseCase;

@CrossOrigin
@RestController
public class EnrollmentController {
    private final EnrollApplicantUseCase enrollApplicantUseCase;

    @Autowired
    public EnrollmentController(EnrollApplicantUseCase enrollApplicantUseCase) {
        this.enrollApplicantUseCase = enrollApplicantUseCase;
    }

    @PostMapping("/enroll")
    public ResponseEntity<ResponseDTO<Object>> enrollApplicant(@RequestBody EnrollmentRequest request) {
        boolean success = enrollApplicantUseCase.run(request);
        if (success) {
            return ResponseEntity.ok(new ResponseDTO<>(null, "SUCCESS"));
        } else {
            return ResponseEntity.ok(new ResponseDTO<>(null, "EMAIL_ALREADY_EXISTS"));
        }
    }
}
