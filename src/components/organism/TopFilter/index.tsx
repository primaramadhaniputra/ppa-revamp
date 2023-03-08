import StyledButton from "atoms/StyledButton";
import React, { useState } from "react";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { colors, fontWeights } from "utils/styles";
import FilteredDateWithCustomDay from "../FilterDateWithCustomDay";
import { ButtonWrapper, Wrapper } from "./styles";

interface IProps {
	children?: React.ReactNode;
	noDate?: boolean;
}

export default function TopFilter({ children, noDate }: IProps) {
	const [dateState, setDateState] = useState<any[]>([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleDateState = (e: any[]) => {
		setDateState(e);
	};

	return (
		<FilterLayouts>
			<Wrapper>
				{!noDate && (
					<FilteredDateWithCustomDay
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
