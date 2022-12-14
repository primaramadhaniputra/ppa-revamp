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
				title="Fuel Rate"
			>
				<Grid container gap={50} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput
						isLabel={true}
						isDate={true}
						title="Date"
						maxLableWidth="100px"
						type="number"
					/>
					<UltimateInput isLabel={true} isInputSelect={true} title="Shift" maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Group Leader"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Fuelman"
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} isInputSelect={true} title="FT" maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Activity"
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} isInputSelect={true} title="CN" maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInput={true}
						title="Volume"
						maxLableWidth="100px"
						type="number"
					/>
					<UltimateInput
						isLabel={true}
						isInput={true}
						title="Remark"
						maxLableWidth="100px"
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
