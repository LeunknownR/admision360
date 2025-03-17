package pe.edu.howards.admision360_backend.service.masterdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.repository.MasterDataRepository;

import java.util.Map;

@Service
public class MasterDataService {
    private final MasterDataRepository masterDataRepository;
    @Autowired
    public MasterDataService(MasterDataRepository masterDataRepository) {
        this.masterDataRepository = masterDataRepository;
    }
    public Map<String, Object> getUbigeo() {
        return masterDataRepository.getUbigeo();
    }
    public Map<String, Object> getRelationships() {
        return masterDataRepository.getRelationships();
    }
    public Map<String, Object> getAcademicPeriods() {
        return masterDataRepository.getAcademicPeriods();
    }
    public Map<String, Object> getMajors() {
        return masterDataRepository.getMajors();
    }
}
