import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

export default function TopFilter() {
	const [toDateState, setToDateState] = useState<Date>();
	const [fromDateState, setFromDateState] = useState<Date>();
	const handleToDateState = (e: Date) => {
		setToDateState(e);
	};
	const handleFromDateState = (e: Date) => {
		setFromDateState(e);
	};
	return (
		<Wrapper>
			<RevisiDate
				dateState={fromDateState as Date}
				setDateState={handleFromDateState}
				placeholder="Date From"
			/>
			<RevisiDate
				dateState={toDateState as Date}
				setDateState={handleToDateState}
				placeholder="Date To"
			/>
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
