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
				title="Update Unit"
			>
				<Grid container gap={50} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput isLabel={true} isInput={true} title="Code Number" maxLableWidth="100px" />
					<Grid container alignItems="center" gap={50}>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Owner" maxLableWidth="100px" />
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="Group BAPA"
								isInput={true}
								maxLableWidth="100px"
							/>
						</Grid>
					</Grid>
					<Grid container alignItems="center" gap={50}>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Category" maxLableWidth="100px" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} title="Model" isInput={true} maxLableWidth="100px" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" gap={50}>
						<Grid>
							<UltimateInput
								isLabel={true}
								isInputSelect={true}
								title="ABC"
								maxLableWidth="100px"
							/>
						</Grid>
						<Grid>
							<UltimateInput
								isLabel={true}
								title="Loader"
								isInputSelect={true}
								maxLableWidth="100px"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
