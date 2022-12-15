import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { InputContainer } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Claim Application"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title={"Name"} maxLableWidth="60px" />
				<Grid container gap={30}>
					<Grid>
						<UltimateInput isInput={true} title={"Date"} maxLableWidth="60px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Roster"} maxLableWidth="60px" />
					</Grid>
				</Grid>
				<Grid container gap={30}>
					<Grid>
						<UltimateInput isInput={true} title={"Start"} maxLableWidth="60px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Finish"} maxLableWidth="60px" />
					</Grid>
				</Grid>
				<UltimateInput isInput={true} title={"Tugas"} maxLableWidth="60px" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
