import PropTypes from "prop-types";
import { Label } from "../styles";
import { Container, Input, Option, OptionWrapper, Wrapper } from "./styles";
import ArrowIcon from "../../icons/ArrowIcon";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { HandlerFieldPropType } from "../../common-prop-types";
import ErrorMessage from "../ErrorMessage";

const SelectField = ({ label, placeholder, options, handler, styles = {} }) => {
	const [currentDisplay, setCurrentDisplay] = useState("");
	const [open, setOpen] = useState(false);
	const containerRef = useRef();
	useEffect(() => {
		const clickHandler = e => {
			setOpen(
				e.target === containerRef.current ||
					containerRef.current?.contains(e.target)
			);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	}, []);
	useEffect(() => {
		if (!handler.value || options.length === 0) {
			setCurrentDisplay(placeholder);
			return;
		}
		setCurrentDisplay(
			options.find(option => option.value === handler.value)?.display ||
				placeholder
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handler.value, options]);
	function getClassName() {
		const classList = [];
		if (handler.error?.value) classList.push("error");
		if (!handler.value)
			classList.push("empty");
		if (options.length === 0) classList.push("disabled");
		return classList.join(" ");
	}
	function onChange(value) {
		handler.set(value);
		setOpen(false);
	}
	return (
		<Container ref={containerRef} className={getClassName()} {...styles}>
			<Label>{label}</Label>
			<Wrapper>
				<Input
					data-role="input"
					value={currentDisplay}
					onChange={() => {}}
				>
					<ArrowIcon/>
					<div>{currentDisplay}</div>
				</Input>
				{open ? (
					<OptionWrapper>
						{options.map(({ display, value }) => (
							<Option
								key={value}
								onClick={() => onChange(value)}
							>
								{display}
							</Option>
						))}
					</OptionWrapper>
				) : null}
			</Wrapper>
			<ErrorMessage error={handler.error?.value} />
		</Container>
	);
};
SelectField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.exact({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			display: PropTypes.string,
		})
	),
	handler: HandlerFieldPropType,
	styles: PropTypes.object,
};

export default SelectField;
