import { Grid } from "@hudoro/neron";
import { IcCaretDown, IcCaretUp } from "atoms/Icon";
import React from "react";

export default function CompleteArrow() {
	return (
		<Grid container flexDirection="column">
			<IcCaretUp width={12} color="black" />
			<IcCaretDown width={12} color="black" />
		</Grid>
	);
}
