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
				title="Form Schedule Post Test"
			>
				<Grid container gap={50} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Operator"
						maxLableWidth="70px"
					/>
					<UltimateInput isLabel={true} title="Jabatan" isInput={true} maxLableWidth="70px" />
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Unit"
								maxLableWidth="70px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="HM"
								isInput={true}
								type="number"
								maxLableWidth="50px"
							/>
						</Grid>
					</Grid>
					<UltimateInput isLabel={true} isInputSelect={true} title="Lokasi" maxLableWidth="70px" />
					<UltimateInput isLabel={true} title="Remark" isInput={true} maxLableWidth="70px" />
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
