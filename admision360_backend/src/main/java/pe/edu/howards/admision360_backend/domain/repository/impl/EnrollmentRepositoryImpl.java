package pe.edu.howards.admision360_backend.domain.repository.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.edu.howards.admision360_backend.domain.db.DatabaseConnection;
import pe.edu.howards.admision360_backend.domain.repository.EnrollmentRepository;

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
    ) {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall(
                "{CALL sp_enroll_applicant(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)}"
            )) {
            
            // Imprimir información de depuración
            
            statement.setString(1, dni);
            statement.setString(2, name);
            statement.setString(3, surname);
            statement.setString(4, gender);
            statement.setDate(5, birthDate != null ? Date.valueOf(birthDate) : null);
            statement.setString(6, email);
            statement.setString(7, phone);
            
            statement.setString(8, occupation);
            statement.setString(9, originAddress);
            statement.setString(10, studiesInstitutionType);
            statement.setBoolean(11, studiesCompleted != null ? studiesCompleted : false);
            statement.setString(12, studiesEndYear);
            statement.setInt(13, studiesDepartmentId != null ? studiesDepartmentId : 0);
            statement.setInt(14, studiesProvinceId != null ? studiesProvinceId : 0);
            statement.setInt(15, studiesDistrictId != null ? studiesDistrictId : 0);
            statement.setString(16, studiesAddress);
            statement.setString(17, studiesInstitutionName);
            
            statement.setString(18, representativeFullname);
            statement.setInt(19, representativeFamilyRelationshipId != null ? representativeFamilyRelationshipId : 0);
            statement.setString(20, representativeEmail);
            statement.setString(21, representativePhone);
            statement.setString(22, representativeOccupation);
            
            statement.setInt(23, originDistrictId != null ? originDistrictId : 0);
            statement.setInt(24, originProvinceId != null ? originProvinceId : 0);
            statement.setInt(25, originDepartmentId != null ? originDepartmentId : 0);
            statement.setInt(26, majorId != null ? majorId : 0);
            statement.setInt(27, facultyId != null ? facultyId : 0);
            
            statement.registerOutParameter(28, Types.BIT);
            
            statement.execute();
            
            boolean success = statement.getBoolean(28);
            return success;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}
