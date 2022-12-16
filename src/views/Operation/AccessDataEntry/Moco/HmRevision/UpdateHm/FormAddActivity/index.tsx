import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FormAddActivity({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Form Input HM by Activity"
				button={true}
			>
				<Grid container flexDirection="column" gap={30} style={{ marginBottom: "30px" }}>
					<Grid container gap={50}>
						<Grid>
							<UltimateInput isInputSelect={true} title="Activity" />
						</Grid>
						<Grid>
							<UltimateInput isInputSelect={true} title="S.d" />
						</Grid>
					</Grid>
					<Grid container gap={50}>
						<Grid>
							<UltimateInput isInput={true} title="HM Start & Stop" type="time" />
						</Grid>
						<Grid>
							<UltimateInput isInput={true} title="S.d" type="time" />
						</Grid>
					</Grid>
					<Grid container gap={50}>
						<Grid>
							<UltimateInput isInputSelect={true} title="Date Operation" />
						</Grid>
						<Grid>
							<UltimateInput isInputSelect={true} title="S.d" />
						</Grid>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
