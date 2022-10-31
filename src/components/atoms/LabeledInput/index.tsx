import { Grid } from "@hudoro/neron";
import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps {
	title: string;
	placeholder?: string;
	name: string;
	onClick?: () => void;
	value?: string;
	color?: string;
	type?: string;
	style?: React.CSSProperties;
	onChange?: (e: any) => void;
	disabled?: boolean;
	styleLabel?: React.CSSProperties;
}

export default function LabeledInput({
	title,
	color = "black",
	styleLabel,
	style,
	...rest
}: IProps) {
	return (
		<Grid container flexDirection="column" gap={7} style={{ ...style }}>
			{title && <StyledLabel style={{ color, ...styleLabel }}>{title}</StyledLabel>}
			<StyledInput autoComplete="off" {...rest} style={{ flex: "1" }} />
		</Grid>
	);
}
