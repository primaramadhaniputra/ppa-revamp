import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

export default function TopFilter() {
	const [toDateState, setToDateState] = useState<Date>();
	const handleToDateState = (e: Date) => {
		setToDateState(e);
	};

	return (
		<Wrapper>
			<RevisiDate
				dateState={toDateState as Date}
				setDateState={handleToDateState}
				placeholder="Date"
			/>
			<Grid style={{ minWidth: "200px" }}>
				<RevisiDropdown placeholder="Type" />
			</Grid>
			<ButtonWrapper>
				<StyledButton
					style={{
						fontSize: "18px",
						padding: "0",
						fontWeight: fontWeights.bold,
						backgroundColor: colors.orange,
						borderRadius: "3px",
						minWidth: "150px",
					}}
				>
					SHOW
				</StyledButton>
			</ButtonWrapper>
		</Wrapper>
	);
}