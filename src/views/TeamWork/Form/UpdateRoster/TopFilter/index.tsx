import { Grid, Icon } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useRef, useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Container, IconContainer, Wrapper } from "./styles";

export default function TopFilter() {
	const [fromDateState, setFromDateState] = useState<Date>();
	const containerRef = useRef<any>(null);
	const [filterHeight, setFilterHeight] = useState(0);

	const handleFromDateState = (e: Date) => {
		setFromDateState(e);
	};

	const handleShowFilter = () => {
		const { height } = containerRef.current.getBoundingClientRect();
		if (filterHeight <= 0) {
			return setFilterHeight(height);
		} else {
			return setFilterHeight(0);
		}
	};

	return (
		<>
			<IconContainer onClick={handleShowFilter}>
				<Icon iconName="IcSearch" color="white" />
			</IconContainer>
			<Container style={{ height: filterHeight, overflow: filterHeight ? "inherit" : "hidden" }}>
				<Wrapper ref={containerRef}>
					<RevisiDate
						dateState={fromDateState as Date}
						setDateState={handleFromDateState}
						placeholder="From"
					/>
					<Grid style={{ minWidth: "200px" }}>
						<RevisiDropdown />
					</Grid>
					<ButtonWrapper style={{ minWidth: "150px" }}>
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
			</Container>
		</>
	);
}
