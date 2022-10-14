import StyledButton from "atoms/StyledButton";
import FilteredDate2 from "molecules/FilteredDate2";
import React, { useState } from "react";
import { Range } from "react-date-range";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

interface IProps {
	children?: React.ReactNode;
	noDate?: boolean;
}

export default function TopFilter({ children, noDate }: IProps) {
	const [dateState, setDateState] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleDateState = (e: Range[]) => {
		setDateState(e);
	};

	return (
		<FilterLayouts>
			<Wrapper>
				{!noDate && (
					<FilteredDate2
						dateState={dateState as any}
						setDateState={handleDateState}
						placeholder="Choose Date"
					/>
				)}
				{children}
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
		</FilterLayouts>
	);
}
