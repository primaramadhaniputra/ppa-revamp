import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import { NumberInput, Wrapper } from "./styles";

interface IProps {
	value: {
		id: number;
		values: string;
		label: string;
	};
	handleChange: (e: any) => void;
}

export default function ShowDataTable({ value, handleChange }: IProps) {
	return (
		<Wrapper gap={5}>
			<Text variant="p" style={{ fontFamily: fontFamilies.poppins, flex: 1 }}>
				Show
			</Text>
			<Grid style={{ flex: 6 }}>
				<NumberInput value={parseInt(value.values, 10)} onChange={handleChange} />
			</Grid>
		</Wrapper>
	);
}
