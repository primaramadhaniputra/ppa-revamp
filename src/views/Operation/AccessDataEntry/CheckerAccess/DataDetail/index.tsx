import { Grid, Select } from "@hudoro/neron";
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
				<Grid style={{ marginBottom: "20px" }}>
					<Select
						placeholder="Choose Checker Name..."
						items={checkerData}
						defaultValue={checkerData[0]}
					/>
				</Grid>
				<StyledButton>Save</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
