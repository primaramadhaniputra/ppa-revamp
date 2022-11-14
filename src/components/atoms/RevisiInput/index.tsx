import React from "react";
import { StyledInput } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	// placeholder: string;
}

export default function RevisiInput({ ...rest }: IProps) {
	return <StyledInput {...rest} />;
}
