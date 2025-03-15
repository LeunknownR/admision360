package pe.edu.howards.admision360_backend.service.family;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.domain.repository.FamilyRepository;

import java.util.Map;

@Service
public class FamilyServiceImpl implements FamilyService {

    private final FamilyRepository familyRepository;

    @Autowired
    public FamilyServiceImpl(FamilyRepository familyRepository) {
        this.familyRepository = familyRepository;
    }

    @Override
    public Map<String, Object> getRelationships() {
        return familyRepository.getRelationships();
    }
}
