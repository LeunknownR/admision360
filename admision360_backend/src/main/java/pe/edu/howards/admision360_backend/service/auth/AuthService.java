package pe.edu.howards.admision360_backend.service.auth;

import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.request.AuthRequest;
import pe.edu.howards.admision360_backend.request.RegisterRequest;
import pe.edu.howards.admision360_backend.response.AuthResponse;
import pe.edu.howards.admision360_backend.response.RegisterResponse;

@Service
public interface AuthService {
    AuthResponse login(AuthRequest request);
    RegisterResponse register(RegisterRequest request);
}
