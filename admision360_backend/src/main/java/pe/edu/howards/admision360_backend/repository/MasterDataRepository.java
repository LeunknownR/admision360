package pe.edu.howards.admision360_backend.repository;

import java.util.Map;

public interface MasterDataRepository {
    Map<String, Object> getAcademicPeriods();
    Map<String, Object> getMajors();
    Map<String, Object> getUbigeo();
    Map<String, Object> getRelationships();
}
