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
				title="Update Production Plan Daily"
			>
				<Grid container gap={20} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput
						maxLableWidth="80px"
						isLabel={true}
						title="Tanggal"
						isInput={true}
						min={1}
					/>
					<UltimateInput
						maxLableWidth="80px"
						isLabel={true}
						title="OB"
						isInput={true}
						type="number"
					/>
					<UltimateInput
						maxLableWidth="80px"
						isLabel={true}
						title="Coal"
						isInput={true}
						type="number"
					/>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
