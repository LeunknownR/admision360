package pe.edu.howards.admision360_backend;

public class ResponseDTO<B> {
    private B body;
    public ResponseDTO(B body) {
        this.body = body;
    }
    public B getBody() {
        return body;
    }
}
