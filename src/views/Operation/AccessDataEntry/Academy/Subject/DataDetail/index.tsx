import { Grid, Icon, Text } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

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
				<LabeledInput name="name" title="Subject Name" />
				<StyledButton>Save</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
