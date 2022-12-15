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
			title="EMPLOYEE MUTATION"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title="Name" maxLableWidth="70px" />
				<Grid container gap={30}>
					<Grid>
						<UltimateInput isInput={true} title="NRP" maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Dept" maxLableWidth="70px" />
					</Grid>
				</Grid>
				<UltimateInput isInputSelect={true} title="Jabatan" maxLableWidth="70px" />
				<UltimateInput isInputSelect={true} title="Position" maxLableWidth="70px" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
