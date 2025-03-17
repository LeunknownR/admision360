package pe.edu.howards.admision360_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.howards.admision360_backend.ResponseDTO;
import pe.edu.howards.admision360_backend.service.masterdata.MasterDataService;

import java.util.Map;

@CrossOrigin
@RestController
public class MasterDataController {
    private final MasterDataService masterDataService;
    @Autowired
    public MasterDataController(MasterDataService masterDataService) {
        this.masterDataService = masterDataService;
    }
    @GetMapping("/ubigeo")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getUbigeo() {
        Map<String, Object> data = masterDataService.getUbigeo();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }
    @GetMapping("/family")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getRelationships() {
        Map<String, Object> data = masterDataService.getRelationships();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }
    @GetMapping("/majors")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getMajors() {
        Map<String, Object> data = masterDataService.getMajors();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }
    @GetMapping("/academic-periods")
    public ResponseEntity<ResponseDTO<Map<String, Object>>> getAcademicPeriods() {
        Map<String, Object> data = masterDataService.getAcademicPeriods();
        return ResponseEntity.ok(new ResponseDTO<>(data));
    }
}
