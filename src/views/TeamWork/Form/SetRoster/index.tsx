import { Grid, Text } from "@hudoro/neron";
import React, { useState } from "react";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { FormCard, FormContainer, Wrapper } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import StyledButton from "atoms/StyledButton";
import RevisiInput from "atoms/RevisiInput";
import RevisiDropdown from "atoms/RevisiDropdown";
import RevisiDate from "molecules/RevisiDate";
import { TitleText, WrapperTitle } from "../styles";

export default function SetRoster() {
	const [fromCalendar, setFromCalendar] = useState<Date>();
	const [toCalendar, setToCalendar] = useState<Date>();
	const handleFromCalendar = (e: Date) => {
		setFromCalendar(e);
	};
	const handleToCalendar = (e: Date) => {
		setToCalendar(e);
	};

	return (
		<Wrapper>
			<WrapperTitle>
				<TitleText> Set Roster</TitleText>
			</WrapperTitle>
			<FormContainer>
				<Text variant="h4" style={{ fontWeight: fontWeights.bold, fontSize: "16px" }}>
					Form Roster
				</Text>
				<FormCard>
					<Grid container gap={30} style={{ textAlign: "start", marginBottom: "40px" }}>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiInput placeholder="Nrp" />
						</Grid>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiDropdown />
						</Grid>
					</Grid>
					<Grid container gap={30} style={{ textAlign: "start", marginBottom: "20px" }}>
						<RevisiDate
							dateState={toCalendar as Date}
							setDateState={handleToCalendar}
							placeholder="To"
						/>
						<RevisiDate
							dateState={fromCalendar as Date}
							setDateState={handleFromCalendar}
							placeholder="From"
						/>
					</Grid>
				</FormCard>
				<Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
					<Grid style={{ maxWidth: "200px" }}>
						<StyledButton
							style={{
								color: colors.orange,
								backgroundColor: "transparent",
								borderRadius: "50px",
								fontSize: fontSizing.md.fontSize,
								fontWeight: fontWeights.semi,
								padding: "5px",
							}}
						>
							Back
						</StyledButton>
					</Grid>
					<Grid style={{ maxWidth: "200px" }}>
						<StyledButton
							style={{
								color: colors.white,
								backgroundColor: colors.orange,
								borderRadius: "50px",
								fontSize: fontSizing.md.fontSize,
								fontWeight: fontWeights.semi,
								padding: "5px",
							}}
						>
							Submit
						</StyledButton>
					</Grid>
				</Grid>
			</FormContainer>
		</Wrapper>
	);
}
