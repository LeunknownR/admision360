package pe.edu.howards.admision360_backend.service.ubigeo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.howards.admision360_backend.domain.repository.UbigeoRepository;

import java.util.Map;

@Service
public class UbigeoServiceImpl implements UbigeoService {

    private final UbigeoRepository ubigeoRepository;

    @Autowired
    public UbigeoServiceImpl(UbigeoRepository ubigeoRepository) {
        this.ubigeoRepository = ubigeoRepository;
    }

    @Override
    public Map<String, Object> getGeographicalLocations() {
        return ubigeoRepository.getGeographicalLocations();
    }
}
