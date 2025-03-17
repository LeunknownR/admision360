package pe.edu.howards.admision360_backend.request;

import java.time.LocalDate;

public class EnrollmentRequest {
    private String dni;
    private String name;
    private String surname;
    private String gender;
    private LocalDate birthdate;
    private String email;
    private String phone;
    private String occupation;
    private String address;
    private Integer originDepartmentId;
    private Integer originProvinceId;
    private Integer originDistrictId;
    private String originAddress;
    private String studiesInstitutionType;
    private Boolean studiesCompleted;
    private String studiesEndYear;
    private Integer studiesDepartmentId;
    private Integer studiesProvinceId;
    private Integer studiesDistrictId;
    private String studiesAddress;
    private String studiesInstitutionName;
    private String representativeFullName;
    private Integer representativeFamilyRelationshipId;
    private String representativeEmail;
    private String representativePhone;
    private String representativeOccupation;
    private Integer majorId;
    private Integer facultyId;
    private String dniBase64;
    private String studyCertificateBase64;
    private String statementNotCriminalRecordBase64;
    private String compromiseStudyCertificateBase64;
    private String documentaryProgressFiveYearBase64;

    // Getters and Setters
    public String getDni() {
        return dni;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getGender() {
        return gender;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getOccupation() {
        return occupation;
    }
    public String getAddress() {
        return address;
    }

    public Integer getOriginDepartmentId() {
        return originDepartmentId;
    }

    public Integer getOriginProvinceId() {
        return originProvinceId;
    }

    public Integer getOriginDistrictId() {
        return originDistrictId;
    }

    public String getOriginAddress() {
        return originAddress;
    }

    public String getStudiesInstitutionType() {
        return studiesInstitutionType;
    }

    public Boolean getStudiesCompleted() {
        return studiesCompleted;
    }

    public String getStudiesEndYear() {
        return studiesEndYear;
    }

    public Integer getStudiesDepartmentId() {
        return studiesDepartmentId;
    }

    public Integer getStudiesProvinceId() {
        return studiesProvinceId;
    }

    public Integer getStudiesDistrictId() {
        return studiesDistrictId;
    }

    public String getStudiesAddress() {
        return studiesAddress;
    }

    public String getStudiesInstitutionName() {
        return studiesInstitutionName;
    }

    public String getRepresentativeFullName() {
        return representativeFullName;
    }

    public Integer getRepresentativeFamilyRelationshipId() {
        return representativeFamilyRelationshipId;
    }
    public String getRepresentativeEmail() {
        return representativeEmail;
    }

    public String getRepresentativePhone() {
        return representativePhone;
    }

    public String getRepresentativeOccupation() {
        return representativeOccupation;
    }

    public Integer getMajorId() {
        return majorId;
    }

    public Integer getFacultyId() {
        return facultyId;
    }
    public String getDniBase64() {
        return dniBase64;
    }
    public String getStudyCertificateBase64() {
        return studyCertificateBase64;
    }
    public String getStatementNotCriminalRecordBase64() {
        return statementNotCriminalRecordBase64;
    }
    public String getCompromiseStudyCertificateBase64() {
        return compromiseStudyCertificateBase64;
    }
    public String getDocumentaryProgressFiveYearBase64() {
        return documentaryProgressFiveYearBase64;
    }
}
