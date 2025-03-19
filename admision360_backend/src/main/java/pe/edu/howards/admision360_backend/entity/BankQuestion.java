package pe.edu.howards.admision360_backend.entity;

public class BankQuestion {
	private int number;
	private String question;
	private String photo;
	private String section;
	private String A;
	private String B;
	private String C;
	private String D;
	private String E;
	private String answer;

	public BankQuestion(int number, String question, String photo, String section, String A, String B, String C, String D, String E, String answer) {
		this.number = number;
		this.question = question;
		this.photo = photo.length() > 0 ? photo : null;
		this.section = section;
		this.A = A;
		this.B = B;
		this.C = C;
		this.D = D;
		this.E = E;
		this.answer = answer;
	}

	public int getNumber() {
		return number;
	}

	public String getQuestion() {
		return question;
	}

	public String getPhoto() {
		return photo;
	}

	public String getSection() {
		return section;
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

	public String getAnswer() {
		return answer;
	}
}
