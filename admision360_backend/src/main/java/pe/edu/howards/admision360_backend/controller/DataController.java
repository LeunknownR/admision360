package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.service.family.FamilyService;
import pe.edu.howards.admision360_backend.service.major.MajorService;
import pe.edu.howards.admision360_backend.service.ubigeo.UbigeoService;

import java.util.Map;

@RestController
public class DataController {

    private final UbigeoService ubigeoService;
    private final MajorService majorService;
    private final FamilyService familyService;

    @Autowired
    public DataController(UbigeoService ubigeoService, MajorService majorService, FamilyService familyService) {
        this.ubigeoService = ubigeoService;
        this.majorService = majorService;
        this.familyService = familyService;
    }

    @GetMapping("/ubigeo")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getUbigeo() {
        Map<String, Object> data = ubigeoService.getGeographicalLocations();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }

    @GetMapping("/majors")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getMajors() {
        Map<String, Object> data = majorService.getMajors();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }

    @GetMapping("/family")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getFamilyRelationships() {
        Map<String, Object> data = familyService.getRelationships();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }
}
