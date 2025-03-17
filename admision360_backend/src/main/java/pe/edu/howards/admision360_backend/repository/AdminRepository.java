package pe.edu.howards.admision360_backend.repository;

import pe.edu.howards.admision360_backend.entity.Admin;

public interface AdminRepository {
    Admin findByUsername(String username);
    boolean createAdmin(String username, String hashedPassword, String name);
}
