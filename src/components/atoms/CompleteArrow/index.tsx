import { Grid } from "@hudoro/neron";
import { IcCaretDown, IcCaretUp } from "atoms/Icon";
import React from "react";

interface IProps {
	color?: string;
}

export default function CompleteArrow({ color = "black" }: IProps) {
	return (
		<Grid container flexDirection="column">
			<IcCaretUp width={12} color={color} />
			<IcCaretDown width={12} color={color} />
		</Grid>
	);
}
