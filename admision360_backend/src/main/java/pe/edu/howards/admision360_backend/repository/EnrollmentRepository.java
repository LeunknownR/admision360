package pe.edu.howards.admision360_backend.repository;

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
        String address,
        String originAddress,
        String studiesInstitutionType,
        boolean studiesCompleted,
        String studiesEndYear,
        int studiesDepartmentId,
        int studiesProvinceId,
        int studiesDistrictId,
        String studiesAddress,
        String studiesInstitutionName,
        String representativeFullName,
        int representativeFamilyRelationshipId,
        String representativeEmail,
        String representativePhone,
        String representativeOccupation,
        int originDistrictId,
        int originProvinceId,
        int originDepartmentId,
        int majorId,
        int facultyId,
        String dniFilename,
        String studyCertificateFilename,
        String statementNotCriminalRecordFilename,
        String compromiseStudyCertificateFilename,
        String documentaryProgressFiveYearFilename,
        String academicPeriodId
    );
}
