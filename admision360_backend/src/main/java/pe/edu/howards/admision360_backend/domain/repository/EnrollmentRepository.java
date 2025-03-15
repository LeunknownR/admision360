package pe.edu.howards.admision360_backend.domain.repository;

import java.time.LocalDate;

public interface EnrollmentRepository {
    boolean enrollApplicant(
        String dni,
        String name,
        String surname,
        String gender,
        LocalDate birthDate,
        String email,
        String phone,
        String occupation,
        String originAddress,
        String studiesInstitutionType,
        Boolean studiesCompleted,
        String studiesEndYear,
        Integer studiesDepartmentId,
        Integer studiesProvinceId,
        Integer studiesDistrictId,
        String studiesAddress,
        String studiesInstitutionName,
        String representativeFullname,
        Integer representativeFamilyRelationshipId,
        String representativeEmail,
        String representativePhone,
        String representativeOccupation,
        Integer originDistrictId,
        Integer originProvinceId,
        Integer originDepartmentId,
        Integer majorId,
        Integer facultyId
    );
}
