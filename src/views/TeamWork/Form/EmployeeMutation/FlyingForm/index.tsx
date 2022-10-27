import { Grid, Select } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { inputDropDownOperation } from "utils/dummy";
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
			title="Update Form"
		>
			<InputContainer>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>NRP</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Name</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Date</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Code</StyledLabel>
					<Grid>
						<Select items={inputDropDownOperation} />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Day</StyledLabel>
					<Grid>
						<Select items={inputDropDownOperation} />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Job</StyledLabel>
					<Grid>
						<Select items={inputDropDownOperation} />
					</Grid>
				</Grid>
				<Grid container gap={10} alignItems="center">
					<StyledLabel>Pos</StyledLabel>
					<Grid container gap={10}>
						<Grid>
							<Styledinput />
						</Grid>
						<Grid>
							<Styledinput />
						</Grid>
					</Grid>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
