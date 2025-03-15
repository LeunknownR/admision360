USE admision360;

DELIMITER //

CREATE PROCEDURE sp_get_admin_by_username(IN p_username VARCHAR(8))
BEGIN
    SELECT id, username, password, name
    FROM admin
    WHERE username = p_username;
END //

    CREATE PROCEDURE sp_create_admin(
        IN p_username VARCHAR(8),
        IN p_password VARCHAR(60),
        IN p_name VARCHAR(50),
        OUT p_success BIT
    )
    BEGIN
        DECLARE admin_count INT;
        
        -- Check if username already exists
        SELECT COUNT(*) INTO admin_count FROM admin WHERE username = p_username;
        
        IF admin_count = 0 THEN
            -- Insert new admin
            INSERT INTO admin(username, password, name) VALUES (p_username, p_password, p_name);
            SET p_success = 1;
        ELSE
            -- Username already exists
            SET p_success = 0;
        END IF;
    END //

DELIMITER ;