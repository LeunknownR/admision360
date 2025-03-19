USE admision360;

DELIMITER / /

DROP PROCEDURE IF EXISTS sp_get_admin_by_username / /

CREATE PROCEDURE sp_get_admin_by_username(IN p_username VARCHAR(8))
BEGIN
    SELECT id, username, password, name
    FROM admin
    WHERE username = p_username;
END //

DROP PROCEDURE IF EXISTS sp_create_admin / /

CREATE PROCEDURE sp_create_admin(
    IN p_username VARCHAR(8),
    IN p_password VARCHAR(60),
    IN p_name VARCHAR(50),
    OUT p_success BIT
)
BEGIN
    DECLARE admin_count INT;
    
    -- Check if username already exists
    SELECT COUNT(1) INTO admin_count FROM admin WHERE username = p_username;
    
    IF admin_count = 0 THEN
        -- Insert new admin
        INSERT INTO admin(username, password, name) VALUES (p_username, p_password, p_name);
        SET p_success = 1;
    ELSE
        -- Username already exists
        SET p_success = 0;
    END IF;
END //

DROP PROCEDURE IF EXISTS sp_get_geographical_locations / /

CREATE PROCEDURE sp_get_geographical_locations()
BEGIN
    SELECT 
        JSON_OBJECT(
            'departments', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT('id', d.id, 'name', d.name)
            ) FROM department d),

            'provinces', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT('id', p.id, 'name', p.name, 'departmentId', p.department_id)
            ) FROM province p),

            'districts', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT('id', dis.id, 'name', dis.name, 'provinceId', dis.province_id)
            ) FROM district dis)
        ) AS data;
END //

DROP PROCEDURE IF EXISTS sp_get_majors / /

CREATE PROCEDURE sp_get_majors()
BEGIN
    SELECT 
        JSON_OBJECT(
            'majors', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id', m.id,
                    'name', m.name,
                    'professionalSchool', m.professional_school,
                    'faculty', JSON_OBJECT('id', f.id, 'name', f.name)
                )
            ) FROM major m INNER JOIN faculty f ON m.faculty_id = f.id)
        ) AS data;
END //

DROP PROCEDURE IF EXISTS sp_get_relationships / /

CREATE PROCEDURE sp_get_relationships()
BEGIN
    SELECT 
        JSON_OBJECT(
            'familyRelationships', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT('id', fr.id, 'name', fr.name)
            ) FROM family_relationship fr)
        ) AS data;
END //

DROP PROCEDURE IF EXISTS sp_get_academic_periods / /

CREATE PROCEDURE sp_get_academic_periods()
BEGIN
    SELECT 
        JSON_OBJECT(
            'academicPeriods', (SELECT JSON_ARRAYAGG(
                JSON_OBJECT('id', ap.id, 'name', ap.name)
            ) FROM academic_period ap)
        ) AS data;
END //

DROP PROCEDURE IF EXISTS sp_enroll_applicant / /

CREATE PROCEDURE sp_enroll_applicant(
    IN p_dni VARCHAR(8),
    IN p_name VARCHAR(50),
    IN p_surname VARCHAR(50),
    IN p_gender VARCHAR(1),
    IN p_birth_date DATE,
    IN p_email VARCHAR(50),
    IN p_phone VARCHAR(9),
    IN p_occupation VARCHAR(50),
    IN p_address VARCHAR(100),
    IN p_studies_institution_type VARCHAR(1),
    IN p_studies_completed BIT,
    IN p_studies_end_year VARCHAR(4),
    IN p_studies_department_id INT,
    IN p_studies_province_id INT,
    IN p_studies_district_id INT,
    IN p_studies_address VARCHAR(100),
    IN p_studies_institution_name VARCHAR(100),
    IN p_representative_fullname VARCHAR(100),
    IN p_representative_family_relationship_id INT,
    IN p_representative_email VARCHAR(50),
    IN p_representative_phone VARCHAR(9),
    IN p_representative_occupation VARCHAR(50),
    IN p_origin_district_id INT,
    IN p_origin_province_id INT,
    IN p_origin_department_id INT,
    IN p_origin_address VARCHAR(100),
    IN p_mayor_id INT,
    IN p_faculty_id INT,
    IN p_dni_filename VARCHAR(50),
    IN p_study_certificate_filename VARCHAR(50),
    IN p_statement_not_criminal_record_filename VARCHAR(50),
    IN p_compromise_study_certificate_filename VARCHAR(50),
    IN p_documentary_progress_five_year_filename VARCHAR(50),
    IN p_academic_period_id VARCHAR(3),
    OUT p_success BIT
)
BEGIN
    DECLARE applicant_count INT;
    
    -- Check if email already exists
    SELECT COUNT(1) INTO applicant_count FROM applicant WHERE email = p_email;
    
    -- Inicializar el parámetro de salida
    SET p_success = 0;
    
    IF applicant_count = 0 THEN
        -- Insert new applicant
        INSERT INTO applicant(dni, name, surname, gender, birth_date, email, phone, occupation, address, applying_date, origin_district_id, origin_province_id, origin_department_id, origin_address, mayor_id, faculty_id, academic_period_id) 
        VALUES (p_dni, p_name, p_surname, p_gender, p_birth_date, p_email, p_phone, p_occupation, p_address, CURDATE(), p_origin_district_id, p_origin_province_id, p_origin_department_id, p_origin_address, p_mayor_id, p_faculty_id, p_academic_period_id);
        
        SET @last_id = LAST_INSERT_ID();

        -- Insert new applicant educational institution
        INSERT INTO applicant_educational_institution(
            applicant_id, name, end_year, 
            is_completed_education, institution_type, 
            address, 
            district_id, province_id, department_id
        ) 
        VALUES (@last_id, p_studies_institution_name, p_studies_end_year, p_studies_completed, p_studies_institution_type, p_studies_address, p_studies_district_id, p_studies_province_id, p_studies_department_id);
        
        -- Insert new applicant representative
        INSERT INTO applicant_representative(
            applicant_id, full_name, occupation, 
            email, phone, 
            family_relationship_id) 
        VALUES (
            @last_id, p_representative_fullname, p_representative_occupation, 
            p_representative_email, p_representative_phone, 
            p_representative_family_relationship_id
        );
        
        -- Insert new applicant document
        INSERT INTO applicant_document(
            applicant_id, dni_filename, 
            study_certificate_filename, 
            statement_not_criminal_record_filename, 
            compromise_study_certificate_filename, 
            documentary_progress_five_year_filename
        ) 
        VALUES (
            @last_id, 
            p_dni_filename, 
            p_study_certificate_filename, 
            p_statement_not_criminal_record_filename, 
            p_compromise_study_certificate_filename, 
            p_documentary_progress_five_year_filename
        );
        
        SET p_success = 1;
        
        SELECT p_success;
    ELSE
        -- Email already exists
        SET p_success = 0;
        
        SELECT p_success;
    END IF;
END //


DROP PROCEDURE IF EXISTS sp_get_applicant / /

CREATE PROCEDURE sp_get_applicant(
    IN p_dni VARCHAR(8),
    IN p_academic_period_id VARCHAR(3)
)
BEGIN
    SELECT 
        ap.dni,
        CONCAT(ap.name, ' ', ap.surname) AS 'full_name',
        CASE WHEN gender = 'M' 
            THEN 'Masculino' 
            ELSE 'Femenino' 
        END AS 'gender',
        ap.birth_date,
        ap.email,
        ap.phone,
        ap.occupation,
        ap.address,
        origin_dpt.name AS 'origin_department',
        origin_prv.name AS 'origin_province',
        origin_dst.name AS 'origin_district',
        ap.origin_address,
        CASE WHEN apei.institution_type = 'E' 
            THEN 'Estatal' 
            ELSE 'Particular' 
        END AS 'institution_type',
        apei.name AS 'institution_name',
        CASE WHEN apei.is_completed_education = 1 
            THEN 'Completado' 
            ELSE 'Cursando 5° año'
        END AS 'education_state',
        apei.end_year AS 'education_end_year',
        apei_dpt.name AS 'educational_institution_department',
        apei_prv.name AS 'educational_institution_province',
        apei_dst.name AS 'educational_institution_district',
        apei.address,
        apr.full_name AS 'representative_full_name',
        frel.name AS 'representative_relationship',
        apr.email AS 'representative_email',
        apr.phone AS 'representative_phone',
        apr.occupation AS 'representative_occupation',
        mj.name AS 'major_name',
        fc.name AS 'faculty_name',
        apd.dni_filename,
        apd.study_certificate_filename,
        apd.statement_not_criminal_record_filename,
        apd.compromise_study_certificate_filename,
        apd.documentary_progress_five_year_filename
    FROM applicant ap
    INNER JOIN department origin_dpt ON origin_dpt.id = ap.origin_department_id
    INNER JOIN province origin_prv ON origin_prv.id = ap.origin_province_id
    INNER JOIN district origin_dst ON origin_dst.id = ap.origin_district_id
    INNER JOIN major mj ON mj.id = ap.mayor_id
    INNER JOIN faculty fc ON mj.faculty_id = fc.id
    INNER JOIN applicant_representative apr ON apr.applicant_id = ap.id
    INNER JOIN applicant_educational_institution apei ON apei.applicant_id = ap.id
    INNER JOIN family_relationship frel ON frel.id = apr.family_relationship_id
    INNER JOIN department apei_dpt ON apei_dpt.id = apei.department_id
    INNER JOIN province apei_prv ON apei_prv.id = ap.origin_province_id
    INNER JOIN district apei_dst ON apei_dst.id = ap.origin_district_id
    INNER JOIN applicant_document apd ON apd.applicant_id = ap.id
    WHERE ap.dni = p_dni AND ap.academic_period_id = p_academic_period_id;
END //


DROP PROCEDURE IF EXISTS get_all_exam_models / /

CREATE PROCEDURE get_all_exam_models(
	IN p_academic_period_id VARCHAR(3)
)
BEGIN
    SELECT 
        id,
        area,
        model,
        filename
    FROM exam
    WHERE academic_period_id = p_academic_period_id
    ORDER BY model, area;
END //

DELIMITER / /
