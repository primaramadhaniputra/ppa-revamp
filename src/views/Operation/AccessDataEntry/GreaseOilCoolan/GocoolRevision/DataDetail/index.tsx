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
				title="Add Oil, coolant and grease consumption"
			>
				<Grid container gap={50} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Storage"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Location"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Mechanic"
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} isInput={true} title="Jabatan" maxLableWidth="100px" />
					<Grid container alignItems="center" gap={50}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Unit"
								maxLableWidth="100px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="HM"
								isInput={true}
								type="number"
								maxLableWidth="40px"
							/>
						</Grid>
					</Grid>
					<UltimateInput isLabel={true} isInputSelect={true} title="Type" maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Component"
						maxLableWidth="100px"
					/>
					<Grid container alignItems="center" gap={50}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Position"
								maxLableWidth="100px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="Qty"
								isInput={true}
								type="number"
								maxLableWidth="40px"
							/>
						</Grid>
					</Grid>
					<UltimateInput isLabel={true} isInputSelect={true} title="Status" maxLableWidth="100px" />
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
