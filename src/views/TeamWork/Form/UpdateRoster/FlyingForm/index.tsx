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
			title="Update Form"
		>
			<InputContainer>
				<StyledSelectInput title="NRP" />
				<StyledSelectInput title="Name" />
				<StyledSelectInput title="Date" />
				<Grid container gap={20}>
					<Grid style={{ minWidth: "250px" }}>
						<StyledSelectInput title="Code" />
					</Grid>
					<Grid style={{ minWidth: "250px" }}>
						<StyledSelectInput title="Day" />
					</Grid>
				</Grid>
				<Grid container gap={30} alignItems="center">
					<Grid container style={{ minWidth: "250px" }} gap={30}>
						<Grid>
							<StyledSelectInput title="Job" />
						</Grid>
						<Grid container>
							<RevisiInput />
						</Grid>
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1 }}>
						<StyledLabel>Pos</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "250px" }}>Update</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
