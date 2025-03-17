package pe.edu.howards.admision360_backend.repository.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.edu.howards.admision360_backend.database.DatabaseConnection;
import pe.edu.howards.admision360_backend.repository.EnrollmentRepository;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.sql.Types;
import java.time.LocalDate;

@Repository
public class EnrollmentRepositoryImpl implements EnrollmentRepository {

    private final DatabaseConnection databaseConnection;

    @Autowired
    public EnrollmentRepositoryImpl(DatabaseConnection databaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    @Override
    public boolean enrollApplicant(
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
    ) {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall(
                "{CALL sp_enroll_applicant(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)}"
            )) {
            statement.setString(1, dni);
            statement.setString(2, name);
            statement.setString(3, surname);
            statement.setString(4, gender);
            statement.setDate(5, birthDate != null ? Date.valueOf(birthDate) : null);
            statement.setString(6, email);
            statement.setString(7, phone);
            statement.setString(8, occupation);
            statement.setString(9, address);
            statement.setString(10, studiesInstitutionType);
            statement.setBoolean(11, studiesCompleted);
            statement.setString(12, studiesEndYear);
            statement.setInt(13, studiesDepartmentId);
            statement.setInt(14, studiesProvinceId);
            statement.setInt(15, studiesDistrictId);
            statement.setString(16, studiesAddress);
            statement.setString(17, studiesInstitutionName);

            statement.setString(18, representativeFullName);
            statement.setInt(19, representativeFamilyRelationshipId);
            statement.setString(20, representativeEmail);
            statement.setString(21, representativePhone);
            statement.setString(22, representativeOccupation);

            statement.setInt(23, originDistrictId);
            statement.setInt(24, originProvinceId);
            statement.setInt(25, originDepartmentId);
            statement.setString(26, originAddress);

            statement.setInt(27, majorId);
            statement.setInt(28, facultyId);

            statement.setString(29, dniFilename);
            statement.setString(30, studyCertificateFilename);
            statement.setString(31, statementNotCriminalRecordFilename);
            statement.setString(32, compromiseStudyCertificateFilename);
            statement.setString(33, documentaryProgressFiveYearFilename);
            statement.setString(34, academicPeriodId);

            statement.registerOutParameter(35, Types.BIT);
            
            statement.execute();

            return statement.getBoolean(35);
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}
