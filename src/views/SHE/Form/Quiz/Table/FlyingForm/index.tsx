import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { InputContainer, Styledinput, StyledLabel } from "./styles";

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
			title="Form Update Question Quiz"
			width={1000}
		>
			<InputContainer>
				<Grid container gap={10} flexDirection="row" alignItems="center">
					<StyledLabel>Subject Name :</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ borderRadius: "0", width: "200px" }}>Update</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
