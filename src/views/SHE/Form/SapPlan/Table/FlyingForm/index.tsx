import { Grid, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import {
	HeaderTextContainer,
	InputContainer,
	InputWrapper,
	SingleInputContainer,
	Styledinput,
	StyledLabel,
} from "./styles";

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
		>
			<HeaderTextContainer>
				<Text variant="h4">Update SAP Plan</Text>
			</HeaderTextContainer>
			<InputContainer>
				<SingleInputContainer>
					<StyledLabel>NRP</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</SingleInputContainer>
				<InputWrapper>
					<SingleInputContainer>
						<StyledLabel>Bulan</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
					<SingleInputContainer>
						<StyledLabel>Tahun</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
				</InputWrapper>
				<InputWrapper>
					<SingleInputContainer>
						<StyledLabel>KTA</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
					<SingleInputContainer>
						<StyledLabel>TTA</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
				</InputWrapper>
				<InputWrapper>
					<SingleInputContainer>
						<StyledLabel>Inspeksi</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
					<SingleInputContainer>
						<StyledLabel>Observasi</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
				</InputWrapper>
				<InputWrapper>
					<SingleInputContainer>
						<StyledLabel>P.KRITIS</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
					<SingleInputContainer>
						<StyledLabel>WAKE UP CALL</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
				</InputWrapper>
				<InputWrapper>
					<SingleInputContainer>
						<StyledLabel>S.MEETING</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
					<SingleInputContainer>
						<StyledLabel>CHOACING</StyledLabel>
						<Grid>
							<Styledinput />
						</Grid>
					</SingleInputContainer>
				</InputWrapper>
			</InputContainer>
			<Grid>
				<StyledButton>Update</StyledButton>
			</Grid>
		</LayoutOverlayData>
	);
}
