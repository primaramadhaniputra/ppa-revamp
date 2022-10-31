import { Grid } from "@hudoro/neron";
import React, { InputHTMLAttributes } from "react";
import { Label, StyledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
}

export default function InputTime({ label, name, ...rest }: IProps) {
	return (
		<Grid container alignItems="center" gap={10}>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput id={name} placeholder="time" {...rest} />
		</Grid>
	);
}
