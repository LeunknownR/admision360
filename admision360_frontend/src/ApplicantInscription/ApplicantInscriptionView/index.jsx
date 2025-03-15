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

const ApplicantInscriptionView = () => {
	const form = useApplicantInscriptionForm();
	const majors = [
		{
			id: 1,
			name: "Ing. de sistemas",
			professionalSchool: "Ing. de sistemas",
			faculty: {
				id: 1,
				name: "Ing. de sistemas",
			},
		},
		{
			id: 2,
			name: "Ing. mecánica eléctrica",
			professionalSchool: "Ing. mecánica eléctrica",
			faculty: {
				id: 2,
				name: "Ing. mecánica eléctrica y electrónica",
			},
		},
		{
			id: 3,
			name: "Ing. electrónica",
			professionalSchool: "Ing. electrónica",
			faculty: {
				id: 2,
				name: "Ing. mecánica eléctrica y electrónica",
			},
		},
	];
	const ubigeo = {
		departments: [
			{
				value: 1,
				display: "Ica",
			},
		],
		provinces: [
			{
				value: 1,
				display: "Ica",
			},
		],
		districts: [
			{
				value: 1,
				display: "Ica",
			},
		],
	};
	const familyRelationships = [
		{
			id: 1,
			name: "Padre",
		},
		{
			id: 2,
			name: "Madre",
		},
		{
			id: 3,
			name: "Tío",
		},
		{
			id: 4,
			name: "Hermano",
		},
	];
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
					familyRelationships={familyRelationships}
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
