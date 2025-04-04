package pe.edu.howards.admision360_backend.repository.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.edu.howards.admision360_backend.database.DatabaseConnection;
import pe.edu.howards.admision360_backend.repository.MasterDataRepository;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@Repository
public class MasterDataRepositoryImpl implements MasterDataRepository {

    private final DatabaseConnection databaseConnection;
    private final ObjectMapper objectMapper;

    @Autowired
    public MasterDataRepositoryImpl(DatabaseConnection databaseConnection, ObjectMapper objectMapper) {
        this.databaseConnection = databaseConnection;
        this.objectMapper = objectMapper;
    }
    @Override
    public Map<String, Object> getMajors() {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_get_majors()}")) {

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                String jsonData = resultSet.getString("data");
                try {
                    // Parse the JSON string into a Map
                    @SuppressWarnings("unchecked")
                    Map<String, Object> result = objectMapper.readValue(jsonData, Map.class);
                    return result;
                } catch (JsonProcessingException e) {
                    System.err.println("Error parsing JSON data: " + e.getMessage());
                    return new HashMap<>();
                }
            }

            return new HashMap<>();
        } catch (SQLException e) {
            System.err.println("Error getting majors: " + e.getMessage());
            return new HashMap<>();
        }
    }
    @Override
    public Map<String, Object> getRelationships() {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_get_relationships()}")) {

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                String jsonData = resultSet.getString("data");
                try {
                    // Parse the JSON string into a Map
                    @SuppressWarnings("unchecked")
                    Map<String, Object> result = objectMapper.readValue(jsonData, Map.class);
                    return result;
                } catch (JsonProcessingException e) {
                    System.err.println("Error parsing JSON data: " + e.getMessage());
                    return new HashMap<>();
                }
            }

            return new HashMap<>();
        } catch (SQLException e) {
            System.err.println("Error getting family relationships: " + e.getMessage());
            return new HashMap<>();
        }
    }
    @Override
    public Map<String, Object> getAcademicPeriods() {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_get_academic_periods()}")) {
            
            ResultSet resultSet = statement.executeQuery();
            
            if (resultSet.next()) {
                String jsonData = resultSet.getString("data");
                try {
                    // Parse the JSON string into a Map
                    @SuppressWarnings("unchecked")
                    Map<String, Object> result = objectMapper.readValue(jsonData, Map.class);
                    return result;
                } catch (JsonProcessingException e) {
                    System.err.println("Error parsing JSON data: " + e.getMessage());
                    return new HashMap<>();
                }
            }
            
            return new HashMap<>();
        } catch (SQLException e) {
            System.err.println("Error getting majors: " + e.getMessage());
            return new HashMap<>();
        }
    }
    @Override
    public Map<String, Object> getUbigeo() {
        try (Connection connection = databaseConnection.getConnection();
             CallableStatement statement = connection.prepareCall("{CALL sp_get_geographical_locations()}")) {

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                String jsonData = resultSet.getString("data");
                try {
                    // Parse the JSON string into a Map
                    @SuppressWarnings("unchecked")
                    Map<String, Object> result = objectMapper.readValue(jsonData, Map.class);
                    return result;
                } catch (JsonProcessingException e) {
                    System.err.println("Error parsing JSON data: " + e.getMessage());
                    return new HashMap<>();
                }
            }

            return new HashMap<>();
        } catch (SQLException e) {
            System.err.println("Error getting geographical locations: " + e.getMessage());
            return new HashMap<>();
        }
    }
}
