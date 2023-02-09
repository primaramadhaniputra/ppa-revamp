import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

interface IProps {
	toDate: Date;
	fromDate: Date;
	handleFromDate: (e: Date) => void;
	handleToDate: (e: Date) => void;
	getData: () => void;
}

export default function TopFilter({
	fromDate,
	toDate,
	handleFromDate,
	handleToDate,
	getData,
}: IProps) {
	return (
		<Wrapper>
			<RevisiDate dateState={fromDate as Date} setDateState={handleFromDate} placeholder="From" />
			<RevisiDate dateState={toDate as Date} setDateState={handleToDate} placeholder="To" />
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
					onClick={() => getData()}
				>
					SHOW
				</StyledButton>
			</ButtonWrapper>
		</Wrapper>
	);
}
