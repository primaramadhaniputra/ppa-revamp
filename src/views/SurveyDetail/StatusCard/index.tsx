import { Grid } from "@hudoro/neron";
import { IcAverage, IcScore, IcSum } from "atoms/Icon";
import Cookies from "js-cookie";
import React from "react";
import { Container, IconContainer, StatusText, StyledCard, ValueText } from "./styles";

const renderTextAverage = (evaluationNumber: number) => {
	if (evaluationNumber < 3) {
		return "Under Performance (Kurang Sekali)";
	} else if (evaluationNumber < 5) {
		return "Need Improvement (Kurang)";
	} else if (evaluationNumber < 7) {
		return "Enough (Cukup)";
	} else if (evaluationNumber < 9) {
		return "Good (Bagus)";
	} else {
		return "Excellent (Bagus Sekali)";
	}
};

const StatusCard = () => {
	const total = Cookies.get("total");
	const average = Cookies.get("average");

	const parseAverage = average ? Number(average) : 0;

	return (
		<Container>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IconContainer>
						<IcSum width={32} color="#2F88FF" />
					</IconContainer>
					<Grid container flexDirection="column" gap={10}>
						<StatusText>Total</StatusText>
						<ValueText>{total || 0}</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IconContainer>
						<IcAverage width={32} color="#2F88FF" />
					</IconContainer>
					<Grid container flexDirection="column" gap={10}>
						<StatusText>Rata-Rata</StatusText>
						<ValueText>{average || 0}</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IconContainer>
						<IcScore width={32} color="#2F88FF" />
					</IconContainer>
					<Grid container flexDirection="column" gap={10}>
						<StatusText>Score</StatusText>
						<ValueText>{renderTextAverage(parseAverage)}</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
		</Container>
	);
};

export default StatusCard;
