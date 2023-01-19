import React from "react";
import DoughnutChart from "./DoughnutChart";
import { CardTitle, StyledCard, Wrapper } from "./styles";

const CardDetail = () => {
	return (
		<Wrapper>
			<StyledCard>
				<CardTitle>SHE</CardTitle>
				<DoughnutChart />
			</StyledCard>
			<StyledCard>
				<CardTitle>ENGINEERING & PRODUCTION</CardTitle>
				<DoughnutChart />
			</StyledCard>
			<StyledCard>
				<CardTitle>HRGA & ADMIN</CardTitle>
				<DoughnutChart />
			</StyledCard>
			<StyledCard>
				<CardTitle>LAIN LAIN</CardTitle>
				<DoughnutChart />
			</StyledCard>
		</Wrapper>
	);
};

export default CardDetail;
