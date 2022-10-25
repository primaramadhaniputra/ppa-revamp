import { Grid, Icon, Input, Select, Text } from "@hudoro/neron";
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
	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			>
				<Grid container alignItems="center" justifyContent="space-between">
					<Text variant="h3">Form Create Post Test</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={handleCloseShowDetail} />
				</Grid>
				<Select placeholder="Unit" items={checkerData} />
				<Select placeholder="FT" items={checkerData} />
				<Select placeholder="Date" items={checkerData} />
				<Select placeholder="Shift" items={checkerData} />
				<Select placeholder="Location" items={checkerData} />
				<Input placeholder="Volume" style={{ borderRadius: "5px" }} />
				<StyledButton>Save</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
