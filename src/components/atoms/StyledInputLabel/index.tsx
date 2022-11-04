import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	style?: React.CSSProperties;
}

export default function StyledInputLabel({ title, style, ...rest }: IProps) {
	return (
		<>
			{title && <StyledLabel>{title}</StyledLabel>}
			<StyledInput {...rest} style={{ ...style }} autoComplete="off" />
		</>
	);
}
