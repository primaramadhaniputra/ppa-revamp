import { Grid } from "@hudoro/neron";
import RevisiInput from "atoms/RevisiInput";
import StyledButton from "atoms/StyledButton";
import StyledSelectInput from "atoms/StyledSelectInput";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { InputContainer, StyledLabel } from "./styles";

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
		>
			<InputContainer>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Name</StyledLabel>
					<Grid>
						<RevisiInput />
					</Grid>
				</Grid>
				<Grid container gap={30}>
					<Grid container gap={10} alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>NRP</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
					<Grid container gap={10} alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Dept</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<StyledSelectInput title="Jabatan" />
				<StyledSelectInput title="Position" />
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "250px" }}>Update</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
