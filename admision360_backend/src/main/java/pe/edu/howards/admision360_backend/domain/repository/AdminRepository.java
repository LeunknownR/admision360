package pe.edu.howards.admision360_backend.domain.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.edu.howards.admision360_backend.domain.db.DatabaseConnection;
import pe.edu.howards.admision360_backend.domain.entity.Admin;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

@Repository
public class AdminRepository {

    private final DatabaseConnection databaseConnection;

    @Autowired
    public AdminRepository(DatabaseConnection databaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    public Admin findByUsername(String username) {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_get_admin_by_username(?)}")) {
            
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();
            
            if (resultSet.next()) {
                Admin admin = new Admin();
                admin.setId(resultSet.getInt("id"));
                admin.setUsername(resultSet.getString("username"));
                admin.setPassword(resultSet.getString("password"));
                admin.setName(resultSet.getString("name"));
                return admin;
            }
            
            return null;
        } catch (SQLException e) {
            // In a production environment, you would use proper logging
            System.err.println("Error finding admin by username: " + e.getMessage());
            return null;
        }
    }
    
    public boolean createAdmin(String username, String hashedPassword, String name) {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_create_admin(?, ?, ?, ?)}")) {
            
            statement.setString(1, username);
            statement.setString(2, hashedPassword);
            statement.setString(3, name);
            statement.registerOutParameter(4, Types.BIT);
            
            statement.execute();
            
            return statement.getBoolean(4);
        } catch (SQLException e) {
            // In a production environment, you would use proper logging
            System.err.println("Error creating admin: " + e.getMessage());
            return false;
        }
    }
}
