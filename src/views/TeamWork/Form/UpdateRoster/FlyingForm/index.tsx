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
			title="Update Form"
		>
			<InputContainer>
				<UltimateInput isInputSelect={true} title={"NRP"} maxLableWidth="60px" />
				<UltimateInput isInputSelect={true} title={"Name"} maxLableWidth="60px" />
				<UltimateInput isDate={true} title={"Date"} maxLableWidth="60px" />
				<Grid container gap={30}>
					<Grid>
						<UltimateInput isInputSelect={true} title={"Code"} maxLableWidth="60px" />
					</Grid>
					<Grid>
						<UltimateInput isInputSelect={true} title={"Day"} maxLableWidth="60px" />
					</Grid>
				</Grid>
				<Grid container gap={30} alignItems="center">
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Job"} maxLableWidth="60px" />
						</Grid>
						<Grid container>
							<UltimateInput isInput={true} />
						</Grid>
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Pos"} maxLableWidth="60px" />
					</Grid>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
