import PropTypes from "prop-types";
import { Label } from "../styles";
import { Container, Input, Display } from "./styles";
import { useRef } from "react";
import { HandlerFieldPropType } from "../../common-prop-types";
import ErrorMessage from "../ErrorMessage";

const FileField = ({ label, handler, accept, disabled = false, styles = {} }) => {
	const inputRef = useRef();
	return (
		<Container
			className={handler.error?.value ? "error" : ""}
			{...styles}
			onClick={() => inputRef.current?.click()}
		>
			<Label className="medium">{label}</Label>
			<Display data-role="display">
				<div>{handler.value?.filename || "-"}</div>
				<div role="end-adornment">Buscar</div>
			</Display>
			<Input
				ref={inputRef}
				type="file"
				hidden
				accept={accept}
				onChange={e => {
					const file = e.target.files[0];
					if (!file) return;
					const reader = new FileReader();
					reader.onload = () => {
						handler.set({
							filename: file.name,
							base64: reader.result.replace(/^data:.*;base64,/, ""),
						});
					};
					reader.readAsDataURL(file);
				}}
				disabled={disabled}
			/>
			<ErrorMessage error={handler.error?.value} />
		</Container>
	);
};
FileField.propTypes = {
	label: PropTypes.string,
	handler: HandlerFieldPropType,
	accept: PropTypes.string,
	disabled: PropTypes.bool,
	styles: PropTypes.object,
};

export default FileField;
