import PropTypes from "prop-types";
import { Label } from "../styles";
import { Container, Input, Option, OptionWrapper, Wrapper } from "./styles";
import ArrowIcon from "../../icons/ArrowIcon";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const SelectField = ({ label, placeholder, options, handler }) => {
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
		if (!handler.value) {
			setCurrentDisplay(placeholder);
			return;
		}
		setCurrentDisplay(
			options.find(option => option.value === handler.value)?.display ||
				placeholder
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handler.value]);
	function getClassName() {
		const classList = [];
		if (!handler.value)
			classList.push("empty");
		return classList.join(" ");
	}
	function onChange(value) {
		handler.set(value);
		setOpen(false);
	}
	return (
		<Container ref={containerRef} className={getClassName()}>
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
	handler: PropTypes.object,
};

export default SelectField;
