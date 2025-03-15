package pe.edu.howards.admision360_backend.service.major;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.domain.repository.MajorRepository;

import java.util.Map;

@Service
public class MajorServiceImpl implements MajorService {

    private final MajorRepository majorRepository;

    @Autowired
    public MajorServiceImpl(MajorRepository majorRepository) {
        this.majorRepository = majorRepository;
    }

    @Override
    public Map<String, Object> getMajors() {
        return majorRepository.getMajors();
    }
}
