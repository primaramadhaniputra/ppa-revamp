import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import MultipleDropdownMenu from "molecules/MultipleDropdownMenu";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

const data = ["A40G", "A23D", "BC30"];

export default function TopFilter() {
	const [toDateState, setToDateState] = useState(new Date());
	const [fromDateState, setFromDateState] = useState(new Date());
	const [activeDropdown, setactiveDropdown] = useState([]);
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
			<Grid style={{ minWidth: "150px" }}>
				<MultipleDropdownMenu
					data={data}
					activeDropdown={activeDropdown}
					setActiveDropdown={setactiveDropdown}
				/>
			</Grid>
			<Grid style={{ minWidth: "150px" }}>
				<RevisiDropdown placeholder="Material" />
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
