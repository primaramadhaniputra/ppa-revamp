import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

export default function TopFilter() {
	const [toDateState, setToDateState] = useState(new Date());
	const [fromDateState, setFromDateState] = useState(new Date());
	const handleToDateState = (e: Date) => {
		setToDateState(e);
	};
	const handleFromDateState = (e: Date) => {
		setFromDateState(e);
	};
	return (
		<Wrapper>
			<RevisiDate placeholder="To" dateState={toDateState} setDateState={handleToDateState} />
			<RevisiDate placeholder="From" dateState={fromDateState} setDateState={handleFromDateState} />
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
