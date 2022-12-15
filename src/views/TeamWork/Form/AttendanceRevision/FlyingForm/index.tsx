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
			title="Attendance Revision Form
			"
			width={800}
		>
			<InputContainer>
				<UltimateInput isInputSelect={true} title="Name" maxLableWidth="70px" />
				<Grid container alignItems="center" gap={50}>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<UltimateInput isDate={true} title="Date" maxLableWidth="70px" />
					</Grid>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<UltimateInput isInput={true} title="Roster" maxLableWidth="70px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<UltimateInput isInput={true} title="In" maxLableWidth="70px" type="time" />
					</Grid>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<UltimateInput isInput={true} title="Out" maxLableWidth="70px" type="time" />
					</Grid>
				</Grid>
				<UltimateInput isInputSelect={true} title="Reason" maxLableWidth="70px" />
				<UltimateInput isInput={true} title="Remark" maxLableWidth="70px" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
