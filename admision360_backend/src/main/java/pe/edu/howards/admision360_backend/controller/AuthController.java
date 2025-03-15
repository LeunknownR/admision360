package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.request.AuthRequest;
import pe.edu.howards.admision360_backend.request.RegisterRequest;
import pe.edu.howards.admision360_backend.response.AuthResponse;
import pe.edu.howards.admision360_backend.response.RegisterResponse;
import pe.edu.howards.admision360_backend.service.auth.AuthService;

@RestController
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("auth/login")
    public ResponseEntity<ResponseDTO<AuthResponse>> login(@RequestBody AuthRequest request) {
        AuthResponse response = authService.login(request);
        
        if (response != null) {
            return ResponseEntity.ok(new ResponseDTO<>(response));
        } else {
            return ResponseEntity.ok(new ResponseDTO<>(null, "INVALID_CREDENTIALS"));
        }
    }
    
    @PostMapping("auth/register")
    public ResponseEntity<ResponseDTO<RegisterResponse>> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = authService.register(request);
        
        if (response != null) {
            return ResponseEntity.ok(new ResponseDTO<>(response));
        } else {
            return ResponseEntity.ok(new ResponseDTO<>(null, "USERNAME_ALREADY_EXISTS"));
        }
    }
}
