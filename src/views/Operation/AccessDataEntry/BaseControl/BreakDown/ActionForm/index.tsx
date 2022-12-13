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

export default function ActionForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="KT08/OPR/RPBD/2209/03080"
			>
				<Grid container gap={20} flexDirection="column" style={{ marginBottom: "20px" }}>
					<Grid container gap={50}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="Code Number"
								maxLableWidth="100px"
							/>
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="On" maxLableWidth="30px" />
						</Grid>
					</Grid>
					<UltimateInput
						isLabel={true}
						title="Reported Problem"
						isInput={true}
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} title="Location" isInput={true} maxLableWidth="100px" />
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Downtime Category"
						maxLableWidth="100px"
					/>
					<UltimateInput
						isLabel={true}
						isInputSelect={true}
						title="Component Down"
						maxLableWidth="100px"
					/>
					<UltimateInput isLabel={true} isInputSelect={true} title="Damage" maxLableWidth="100px" />
					<UltimateInput isLabel={true} isInputSelect={true} title="Delay" maxLableWidth="100px" />
					<UltimateInput isLabel={true} title="Taken Action" isInput={true} maxLableWidth="100px" />
					<UltimateInput isLabel={true} isInputSelect={true} title="GL" maxLableWidth="100px" />
					<UltimateInput isLabel={true} title="Mechanic" isInput={true} maxLableWidth="100px" />
					<Grid container gap={50}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="HM BD"
								maxLableWidth="100px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="HM RFU"
								maxLableWidth="70px"
							/>
						</Grid>
					</Grid>
					<UltimateInput
						isLabel={true}
						isInput={true}
						title="WO Number"
						maxLableWidth="100px"
						type="number"
					/>
					<UltimateInput
						isLabel={true}
						isInput={true}
						title="Activity Remark"
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
