package pe.edu.howards.admision360_backend.service.enrollment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.repository.EnrollmentRepository;
import pe.edu.howards.admision360_backend.file.FileSystemStorage;
import pe.edu.howards.admision360_backend.file.FileSystemType;
import pe.edu.howards.admision360_backend.request.EnrollmentRequest;

import java.util.Arrays;

@Service
public class EnrollApplicantUseCase {
    @Value("${domain.currentAcademicPeriodId}")
    private String currentAcademicPeriodId;
    private final EnrollmentRepository enrollmentRepository;
    private final FileSystemStorage fileSystemStorage;
    @Autowired
    public EnrollApplicantUseCase(EnrollmentRepository enrollmentRepository, FileSystemStorage fileSystemStorage) {
        this.enrollmentRepository = enrollmentRepository;
        this.fileSystemStorage = fileSystemStorage;
    }
    public boolean run(EnrollmentRequest request) {
        String dniFilename = FileSystemType.PDF.randomFilename();
        String studyCertificateFilename = FileSystemType.PDF.randomFilename();
        String statementNotCriminalRecordFilename = FileSystemType.PDF.randomFilename();
        String compromiseStudyCertificateFilename = null;
        String documentaryProgressFiveYearFilename = null;
        if (!request.getStudiesCompleted()) {
            compromiseStudyCertificateFilename = FileSystemType.PDF.randomFilename();
            documentaryProgressFiveYearFilename = FileSystemType.PDF.randomFilename();
        }
        boolean success = enrollmentRepository.enrollApplicant(
            request.getDni(),
            request.getName(),
            request.getSurname(),
            request.getGender(),
            request.getBirthdate(),
            request.getEmail(),
            request.getPhone(),
            request.getOccupation(),
            request.getAddress(),
            request.getOriginAddress(),
            request.getStudiesInstitutionType(),
            request.getStudiesCompleted(),
            request.getStudiesEndYear(),
            request.getStudiesDepartmentId(),
            request.getStudiesProvinceId(),
            request.getStudiesDistrictId(),
            request.getStudiesAddress(),
            request.getStudiesInstitutionName(),
            request.getRepresentativeFullName(),
            request.getRepresentativeFamilyRelationshipId(),
            request.getRepresentativeEmail(),
            request.getRepresentativePhone(),
            request.getRepresentativeOccupation(),
            request.getOriginDistrictId(),
            request.getOriginProvinceId(),
            request.getOriginDepartmentId(),
            request.getMajorId(),
            request.getFacultyId(),
            dniFilename,
            studyCertificateFilename,
            statementNotCriminalRecordFilename,
            compromiseStudyCertificateFilename,
            documentaryProgressFiveYearFilename,
            currentAcademicPeriodId
        );
        fileSystemStorage.save(dniFilename, request.getDniBase64());
        fileSystemStorage.save(studyCertificateFilename, request.getStudyCertificateBase64());
        fileSystemStorage.save(statementNotCriminalRecordFilename, request.getStatementNotCriminalRecordBase64());
        if (!request.getStudiesCompleted()) {
            fileSystemStorage.save(compromiseStudyCertificateFilename, request.getCompromiseStudyCertificateBase64());
            fileSystemStorage.save(documentaryProgressFiveYearFilename, request.getDocumentaryProgressFiveYearBase64());
        }
        return success;
    }
}
