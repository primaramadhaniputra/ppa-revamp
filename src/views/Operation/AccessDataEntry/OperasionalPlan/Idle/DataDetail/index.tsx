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
				title="Add Production Plan Idle"
			>
				<Grid container gap={20} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput maxLableWidth="100px" isLabel={true} isInputSelect={true} title="Bulan" />
					<UltimateInput maxLableWidth="100px" isLabel={true} isInputSelect={true} title="Tahun" />
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Hari"
						isInput={true}
						type="number"
						min={1}
					/>
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Rain"
						isInput={true}
						type="number"
					/>
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Slippery"
						isInput={true}
						type="number"
					/>
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Demo"
						isInput={true}
						type="number"
					/>
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Cust.Problem"
						isInput={true}
						type="number"
					/>
					<UltimateInput
						maxLableWidth="100px"
						isLabel={true}
						title="Haze"
						isInput={true}
						type="number"
					/>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "30px" }}>
					<StyledButton style={{ maxWidth: "100px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
