import { ISelectItem, Select, Text } from "@hudoro/neron";
import React from "react";
import { Wrapper } from "./styles";

interface IProps {
	handleLayoutChange: (e: ISelectItem | ISelectItem[] | null) => void;
}

export default function LayoutChanger({ handleLayoutChange }: IProps) {
	const dataDropdown = [
		{
			id: 0,
			values: "start",
			label: "Start",
		},
		{
			id: 1,
			values: "center",
			label: "Center",
		},
		{
			id: 2,
			values: "end",
			label: "End",
		},
	];
	return (
		<Wrapper>
			<Text variant="p">Change Layout</Text>
			<Select
				items={dataDropdown}
				onChange={handleLayoutChange}
				defaultValue={{
					id: 0,
					values: "start",
					label: "Start",
				}}
			/>
		</Wrapper>
	);
}
