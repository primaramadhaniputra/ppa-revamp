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
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Hauler"
								maxLableWidth="70px"
							/>
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} title="📆" isDate={true} maxLableWidth="70px" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Loader"
								maxLableWidth="70px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="⏲"
								isInput={true}
								maxLableWidth="70px"
								type="time"
							/>
						</Grid>
					</Grid>
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Material"
								maxLableWidth="70px"
							/>
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} title="GL" isInputSelect={true} maxLableWidth="70px" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Seam" maxLableWidth="70px" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} title="Elevation" isInput={true} maxLableWidth="70px" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="PIT" maxLableWidth="70px" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} title="Disposal" isInput={true} maxLableWidth="70px" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" justifyContent="space-between" gap={30}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Distance"
								maxLableWidth="70px"
								type="number"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="Production"
								isInput={true}
								maxLableWidth="70px"
								type="number"
							/>
						</Grid>
					</Grid>
					<UltimateInput
						isLabel={true}
						isInput={true}
						title="Disposal elevation"
						maxLableWidth="70px"
					/>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
