package pe.edu.howards.admision360_backend.service.enrollment;

import pe.edu.howards.admision360_backend.request.EnrollmentRequest;

public interface EnrollmentService {
    boolean enrollApplicant(EnrollmentRequest request);
}
