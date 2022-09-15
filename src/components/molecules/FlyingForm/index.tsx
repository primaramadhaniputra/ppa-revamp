import { Grid, Icon, Select, Text } from "@hudoro/neron";
import React from "react";
import { inputDropDownOperation } from "utils/dummy";
import {
	Container,
	HeaderTextContainer,
	InputContainer,
	Styledinput,
	StyledLabel,
	Wrapper,
} from "./styles";

interface IProps {
	closeForm: () => void;
	top?: number;
	isEdit?: boolean;
}

export default function FlyingForm({ closeForm, isEdit, top }: IProps) {
	return (
		<Wrapper
			style={{
				opacity: isEdit ? "1" : "0",
				zIndex: isEdit ? "999" : "-999",
				top: `${top}px`,
			}}
		>
			<Container style={{ transform: isEdit ? "translateY(0)" : "translateY(-15%)" }}>
				<HeaderTextContainer>
					<Text variant="h4">Update Form</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={closeForm} />
				</HeaderTextContainer>
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
			</Container>
		</Wrapper>
	);
}
