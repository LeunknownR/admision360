import Button from "../../components/Button";
import { Flow, Title } from "../../components/styles";
import ApplicantDataSection from "./components/ApplicantDataSection";
import ApplicantMajorSection from "./components/ApplicantMajorSection";
import ApplicantOriginSection from "./components/ApplicantOriginSection";
import ApplicantDocumentSection from "./components/ApplicantDocumentSection";
import ApplicantStudiesSection from "./components/ApplicantStudiesSection";
import useApplicantInscriptionForm from "./hooks/useApplicantInscriptionForm";
import useSelectMajor from "./hooks/useSelectMajor";
import { Container } from "./styles";
import useEnroll from "./hooks/useEnroll";
import ApplicantRepresentativeSection from "./components/ApplicantRepresentativeSection";
import useAppContext from "../../context/useAppContext";

const ApplicantInscriptionView = () => {
	const form = useApplicantInscriptionForm();
	const { masterData } = useAppContext();
	const { ubigeo, majors, family } = masterData;
	const enroll = useEnroll({ form });
	const majorSelected = useSelectMajor({
		form,
		majors,
	});
	return (
		<Container>
			<Title mb="30px">INSCRIPCIÓN - ADMISIÓN 2025-I</Title>
			<Flow
				direction="column"
				gap="40px"
				mb="30px"
			>
				<ApplicantDataSection form={form} />
				<ApplicantOriginSection
					form={form}
					ubigeo={ubigeo}
				/>
				<ApplicantStudiesSection
					form={form}
					ubigeo={ubigeo}
				/>
				<ApplicantRepresentativeSection
					form={form}
					familyRelationships={family.familyRelationships}
				/>
				<ApplicantMajorSection
					form={form}
					majors={majors}
					majorSelected={majorSelected}
				/>
				<ApplicantDocumentSection form={form} />
			</Flow>
			<Button
				text="Completar inscripción"
				styles={{
					w: "25%",
				}}
				onClick={() => {
					const result = enroll();
					if (!result)
						window.scrollTo({
							top:
								document
									.querySelector(
										"[data-role='error-message']"
									)
									?.closest(".error")?.offsetTop || 0,
							behavior: "smooth",
						});
				}}
			/>
		</Container>
	);
};

export default ApplicantInscriptionView;
