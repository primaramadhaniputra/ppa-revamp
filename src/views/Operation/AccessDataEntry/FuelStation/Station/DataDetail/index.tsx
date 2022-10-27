import { Grid } from "@hudoro/neron";
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
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Update Station"
			>
				<Grid container flexDirection="column" gap={20} style={{ marginBottom: "20px" }}>
					<LabeledInput name="cn" title="Cn" />
					<LabeledInput name="mainPlant" title="Main Plant" />
					<LabeledInput name="storageLocation" title="Storage Location" />
					<LabeledInput name="gasStation" title="Gas Station" />
				</Grid>
				<StyledButton>Save</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
