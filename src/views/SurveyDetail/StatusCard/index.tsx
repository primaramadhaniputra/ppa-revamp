import { Grid } from "@hudoro/neron";
import { IcAverage, IcScore, IcSum } from "atoms/Icon";
import Cookies from "js-cookie";
import React from "react";
import { Container, IconContainer, StatusText, StyledCard, ValueText, Wrapper } from "./styles";

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
	const periode = Cookies.get("periode");

	const parseAverage = average ? Number(average) : 0;

	const dataStatus = [
		{
			title: "Total",
			value: total,
			icon: <IcSum width={32} color="#2F88FF" />,
		},
		{
			title: "Rata-Rata",
			value: average,
			icon: <IcAverage width={32} color="#2F88FF" />,
		},
		{
			title: "Score",
			value: parseAverage,
			icon: <IcScore width={32} color="#2F88FF" />,
		},
	];

	return (
		<Wrapper>
			{periode === "Manajemen Risiko" ? (
				<StyledCard>
					<Container>
						<IconContainer>
							<IcSum width={32} color="#2F88FF" />
						</IconContainer>
						<Grid container flexDirection="column" gap={10}>
							<StatusText>Total Paritcipants</StatusText>
							<ValueText>1000</ValueText>
						</Grid>
					</Container>
				</StyledCard>
			) : (
				<>
					{dataStatus.map((item, index) => (
						<StyledCard key={index}>
							<Container>
								<IconContainer>{item.icon}</IconContainer>
								<Grid container flexDirection="column" gap={10}>
									<StatusText>{item.title}</StatusText>
									<ValueText>
										{item.title === "Score" ? renderTextAverage(item.value as number) : item.value}
									</ValueText>
								</Grid>
							</Container>
						</StyledCard>
					))}
				</>
			)}
		</Wrapper>
	);
};

export default StatusCard;
