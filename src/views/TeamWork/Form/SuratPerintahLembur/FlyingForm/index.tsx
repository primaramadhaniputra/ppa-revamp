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
			title="Attendance Revision Form"
			button={true}
			width={800}
		>
			<InputContainer>
				<UltimateInput title="Name" isInput={true} maxLableWidth="70px" />
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput title="📅" isDate={true} maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput title="Roster" isInput={true} maxLableWidth="70px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput title="Start" isInput={true} maxLableWidth="70px" type="time" />
					</Grid>
					<Grid>
						<UltimateInput title="End" isInput={true} maxLableWidth="70px" type="time" />
					</Grid>
				</Grid>
				<UltimateInput title="Remark" isInput={true} maxLableWidth="70px" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
