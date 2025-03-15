package pe.edu.howards.admision360_backend.service.enrollment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.domain.repository.EnrollmentRepository;
import pe.edu.howards.admision360_backend.request.EnrollmentRequest;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    private final EnrollmentRepository enrollmentRepository;

    @Autowired
    public EnrollmentServiceImpl(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

    @Override
    public boolean enrollApplicant(EnrollmentRequest request) {
        return enrollmentRepository.enrollApplicant(
            request.getDni(),
            request.getName(),
            request.getSurname(),
            request.getGender(),
            request.getBirthdate(),
            request.getEmail(),
            request.getPhone(),
            request.getOccupation(),
            request.getOriginAddress(),
            request.getStudiesInstitutionType(),
            request.getStudiesCompleted(),
            request.getStudiesEndYear(),
            request.getStudiesDepartmentId(),
            request.getStudiesProvinceId(),
            request.getStudiesDistrictId(),
            request.getStudiesAddress(),
            request.getStudiesInstitutionName(),
            request.getRepresentativeFullname(),
            request.getRepresentativeFamilyRelationshipId(),
            request.getRepresentativeEmail(),
            request.getRepresentativePhone(),
            request.getRepresentativeOccupation(),
            request.getOriginDistrictId(),
            request.getOriginProvinceId(),
            request.getOriginDepartmentId(),
            request.getMajorId(),
            request.getFacultyId()
        );
    }
}
