package pe.edu.howards.admision360_backend.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DatabaseConnection {
    @Value("${mysql.database.url}")
    private String url;
    @Value("${mysql.database.username}")
    private String username;
    @Value("${mysql.database.password}")
    private String password;

    public Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Properties properties = new Properties();
            properties.setProperty("user", username);
            properties.setProperty("password", password);
            properties.setProperty("useUnicode", "true");
            properties.setProperty("characterEncoding", "UTF-8");
            properties.setProperty("connectionCollation", "utf8mb4_unicode_ci");

            String baseUrl = url.contains("?") ? url : url + "?";
            if (!baseUrl.contains("useUnicode")) {
                baseUrl += "&useUnicode=true&characterEncoding=UTF-8";
            }

            return DriverManager.getConnection(baseUrl, properties);
        } catch (ClassNotFoundException e) {
            throw new SQLException("MySQL JDBC Driver not found", e);
        }
    }
}