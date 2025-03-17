package pe.edu.howards.admision360_backend.service.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.entity.Admin;
import pe.edu.howards.admision360_backend.repository.impl.AdminRepositoryImpl;
import pe.edu.howards.admision360_backend.request.AuthRequest;
import pe.edu.howards.admision360_backend.request.RegisterRequest;
import pe.edu.howards.admision360_backend.response.AuthResponse;
import pe.edu.howards.admision360_backend.response.RegisterResponse;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthServiceImpl implements AuthService {
    
    private final AdminRepositoryImpl adminRepositoryImpl;
    private final String JWT_SECRET = "admision360_jwt_secret_key";
    private final long JWT_EXPIRATION = 86400000; // 24 hours in milliseconds
    
    @Autowired
    public AuthServiceImpl(AdminRepositoryImpl adminRepositoryImpl) {
        this.adminRepositoryImpl = adminRepositoryImpl;
    }
    
    @Override
    public AuthResponse login(AuthRequest request) {
        Admin admin = adminRepositoryImpl.findByUsername(request.getUsername());
        
        if (admin != null && BCrypt.checkpw(request.getPassword(), admin.getPassword())) {
            String token = generateToken(admin.getUsername());
            return new AuthResponse(token, admin.getUsername(), admin.getName());
        }
        
        return null;
    }
    
    @Override
    public RegisterResponse register(RegisterRequest request) {
        // Hash the password using BCrypt
        String hashedPassword = BCrypt.hashpw(request.getPassword(), BCrypt.gensalt(12));
        
        // Create the admin in the database
        boolean success = adminRepositoryImpl.createAdmin(
            request.getUsername(),
            hashedPassword,
            request.getName()
        );
        
        if (success) {
            return new RegisterResponse(request.getUsername(), request.getName());
        }
        
        return null;
    }
    
    private String generateToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
        
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }
}
