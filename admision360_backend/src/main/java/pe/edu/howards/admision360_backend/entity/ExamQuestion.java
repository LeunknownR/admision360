package pe.edu.howards.admision360_backend.entity;

public class ExamQuestion {
    private String question;
    private String photo;
    private String A;
    private String B;
    private String C;
    private String D;
    private String E;
    public ExamQuestion(BankQuestion bankQuestion) {
        this.question = bankQuestion.getQuestion();
        this.photo = bankQuestion.getPhoto();
        this.A = bankQuestion.getA();
        this.B = bankQuestion.getB();
        this.C = bankQuestion.getC();
        this.D = bankQuestion.getD();
        this.E = bankQuestion.getE();
    }
    public String getQuestion() {
        return question;
    }
    public String getPhoto() {
        return photo;
    }
    public String getA() {
        return A;
    }
    public String getB() {
        return B;
    }
    public String getC() {
        return C;
    }
    public String getD() {
        return D;
    }
    public String getE() {
        return E;
    }
}
