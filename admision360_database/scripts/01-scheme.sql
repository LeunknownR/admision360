USE mysql;

DROP DATABASE IF EXISTS admision360;

CREATE DATABASE admision360 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE admision360;

-- Tables independents

CREATE TABLE admin(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(8) NOT NULL,
    password VARCHAR(60) NOT NULL,
    name VARCHAR(50) NOT NULL
); 

CREATE TABLE family_relationship(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE faculty(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE academic_period(
    id VARCHAR(3) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tables dependents

CREATE TABLE province(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE district(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    province_id INT NOT NULL,
    FOREIGN KEY (province_id) REFERENCES province(id)
);

CREATE TABLE major(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    professional_school VARCHAR(100) NOT NULL,
    faculty_id INT NOT NULL,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id)
);

CREATE TABLE applicant(
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(8) NOT NULL,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    occupation VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    applying_date DATE NOT NULL,
    origin_district_id INT NOT NULL,
    origin_province_id INT NOT NULL,
    origin_department_id INT NOT NULL,
    origin_address VARCHAR(100) NOT NULL,
    mayor_id INT NOT NULL,
    faculty_id INT NOT NULL,
    academic_period_id VARCHAR(3) NOT NULL,
    FOREIGN KEY (origin_district_id) REFERENCES district(id),
    FOREIGN KEY (origin_province_id) REFERENCES province(id),
    FOREIGN KEY (origin_department_id) REFERENCES department(id),
    FOREIGN KEY (mayor_id) REFERENCES major(id),
    FOREIGN KEY (faculty_id) REFERENCES faculty(id),
    FOREIGN KEY (academic_period_id) REFERENCES academic_period(id)
);

CREATE TABLE applicant_document(
    applicant_id INT NOT NULL,
    dni_filename VARCHAR(50) NOT NULL,
    study_certificate_filename VARCHAR(50) NOT NULL,
    statement_not_criminal_record_filename VARCHAR(50) NOT NULL,
    compromise_study_certificate_filename VARCHAR(50),
    documentary_progress_five_year_filename VARCHAR(50),
    FOREIGN KEY (applicant_id) REFERENCES applicant(id)
);

CREATE TABLE applicant_representative(
    applicant_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    occupation VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    family_relationship_id INT NOT NULL,
    FOREIGN KEY (family_relationship_id) REFERENCES family_relationship(id),
    FOREIGN KEY (applicant_id) REFERENCES applicant(id)
);

CREATE TABLE applicant_educational_institution(
    applicant_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    end_year INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    is_completed_education BIT NOT NULL,
    institution_type VARCHAR(1) NOT NULL,
    district_id INT NOT NULL,
    province_id INT NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (district_id) REFERENCES district(id),
    FOREIGN KEY (province_id) REFERENCES province(id),
    FOREIGN KEY (department_id) REFERENCES department(id),
    FOREIGN KEY (applicant_id) REFERENCES applicant(id)
);

CREATE TABLE bank_question(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    number INT NOT NULL,
    question TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    photo VARCHAR(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    section VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    A TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    B TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    C TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    D TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    E TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    answer VARCHAR(1) NOT NULL,
    academic_period_id VARCHAR(3) NOT NULL,
    FOREIGN KEY (academic_period_id) REFERENCES academic_period(id)
);

CREATE TABLE exam(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    area VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    model VARCHAR(1) NOT NULL ,
    filename VARCHAR(50) NOT NULL,
    academic_period_id VARCHAR(3) NOT NULL,
    FOREIGN KEY (academic_period_id) REFERENCES academic_period(id)
);

CREATE TABLE exam_question(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    number INT NOT NULL,
    question TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    photo VARCHAR(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    section VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    A TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    B TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    C TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    D TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    E TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    exam_id INT NOT NULL,
    FOREIGN KEY (exam_id) REFERENCES exam(id)
);