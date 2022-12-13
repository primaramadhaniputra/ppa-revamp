import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";

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
				title="Breakdown Form"
			>
				<Grid container gap={20} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Code Number"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						title="HM BD"
						isInput={true}
						type="number"
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} title="Problem" isInput={true} maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Location"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Downtime Category"
						maxLableWidth="100px"
					/>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
