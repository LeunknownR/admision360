package pe.edu.howards.admision360_backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/hello-world/{person}")
    public ResponseEntity<ResponseDTO<String>> sayHi(@PathVariable String person) {
        return ResponseEntity.ok(new ResponseDTO<>(person));
    }
}
