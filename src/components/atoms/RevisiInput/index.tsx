import React from "react";
import { StyledInput } from "./styles";

interface IProps {
	placeholder: string;
}

export default function RevisiInput({ ...rest }: IProps) {
	return <StyledInput {...rest} />;
}
