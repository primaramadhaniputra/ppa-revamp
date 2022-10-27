import { Grid, Input, Select } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const checkerData = [
	{
		id: "0",
		label: "Banana",
		value: "Banana",
	},
	{
		id: "1",
		label: "Grapes",
		value: "Grapes",
	},
];

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Form Create Post Test"
			>
				<Grid container flexDirection="column" gap={20} style={{ marginBottom: "20px" }}>
					<Select placeholder="Unit" items={checkerData} />
					<Select placeholder="FT" items={checkerData} />
					<Select placeholder="Date" items={checkerData} />
					<Select placeholder="Shift" items={checkerData} />
					<Select placeholder="Location" items={checkerData} />
					<Input placeholder="Volume" style={{ borderRadius: "5px" }} />
				</Grid>
				<StyledButton>Save</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
