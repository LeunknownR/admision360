package pe.edu.howards.admision360_backend;

public class ResponseDTO<T> {
    private T data;
    private String message;

    public ResponseDTO() {
        this.message = "SUCCESS";
    }

    public ResponseDTO(T data) {
        this.data = data;
        this.message = "SUCCESS";
    }

    public ResponseDTO(T data, String message) {
        this.data = data;
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
