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
    private String representativeFullname;
    private Integer representativeFamilyRelationshipId;
    private String representativeEmail;
    private String representativePhone;
    private String representativeOccupation;
    private Integer majorId;
    private Integer facultyId;

    // Getters and Setters
    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Integer getOriginDepartmentId() {
        return originDepartmentId;
    }

    public void setOriginDepartmentId(Integer originDepartmentId) {
        this.originDepartmentId = originDepartmentId;
    }

    public Integer getOriginProvinceId() {
        return originProvinceId;
    }

    public void setOriginProvinceId(Integer originProvinceId) {
        this.originProvinceId = originProvinceId;
    }

    public Integer getOriginDistrictId() {
        return originDistrictId;
    }

    public void setOriginDistrictId(Integer originDistrictId) {
        this.originDistrictId = originDistrictId;
    }

    public String getOriginAddress() {
        return originAddress;
    }

    public void setOriginAddress(String originAddress) {
        this.originAddress = originAddress;
    }

    public String getStudiesInstitutionType() {
        return studiesInstitutionType;
    }

    public void setStudiesInstitutionType(String studiesInstitutionType) {
        this.studiesInstitutionType = studiesInstitutionType;
    }

    public Boolean getStudiesCompleted() {
        return studiesCompleted;
    }

    public void setStudiesCompleted(Boolean studiesCompleted) {
        this.studiesCompleted = studiesCompleted;
    }

    public String getStudiesEndYear() {
        return studiesEndYear;
    }

    public void setStudiesEndYear(String studiesEndYear) {
        this.studiesEndYear = studiesEndYear;
    }

    public Integer getStudiesDepartmentId() {
        return studiesDepartmentId;
    }

    public void setStudiesDepartmentId(Integer studiesDepartmentId) {
        this.studiesDepartmentId = studiesDepartmentId;
    }

    public Integer getStudiesProvinceId() {
        return studiesProvinceId;
    }

    public void setStudiesProvinceId(Integer studiesProvinceId) {
        this.studiesProvinceId = studiesProvinceId;
    }

    public Integer getStudiesDistrictId() {
        return studiesDistrictId;
    }

    public void setStudiesDistrictId(Integer studiesDistrictId) {
        this.studiesDistrictId = studiesDistrictId;
    }

    public String getStudiesAddress() {
        return studiesAddress;
    }

    public void setStudiesAddress(String studiesAddress) {
        this.studiesAddress = studiesAddress;
    }

    public String getStudiesInstitutionName() {
        return studiesInstitutionName;
    }

    public void setStudiesInstitutionName(String studiesInstitutionName) {
        this.studiesInstitutionName = studiesInstitutionName;
    }

    public String getRepresentativeFullname() {
        return representativeFullname;
    }

    public void setRepresentativeFullname(String representativeFullname) {
        this.representativeFullname = representativeFullname;
    }

    public Integer getRepresentativeFamilyRelationshipId() {
        return representativeFamilyRelationshipId;
    }

    public void setRepresentativeFamilyRelationshipId(Integer representativeFamilyRelationshipId) {
        this.representativeFamilyRelationshipId = representativeFamilyRelationshipId;
    }

    public String getRepresentativeEmail() {
        return representativeEmail;
    }

    public void setRepresentativeEmail(String representativeEmail) {
        this.representativeEmail = representativeEmail;
    }

    public String getRepresentativePhone() {
        return representativePhone;
    }

    public void setRepresentativePhone(String representativePhone) {
        this.representativePhone = representativePhone;
    }

    public String getRepresentativeOccupation() {
        return representativeOccupation;
    }

    public void setRepresentativeOccupation(String representativeOccupation) {
        this.representativeOccupation = representativeOccupation;
    }

    public Integer getMajorId() {
        return majorId;
    }

    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }

    public Integer getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(Integer facultyId) {
        this.facultyId = facultyId;
    }
}
