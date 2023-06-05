import { Grid, Text, fontFamilies } from "@hudoro/neron";
import { IcAverage, IcFile, IcScore, IcSum } from "atoms/Icon";
import Cookies from "js-cookie";
import React from "react";
import {
	ButtonExport,
	Container,
	IconContainer,
	StatusText,
	StyledCard,
	ValueText,
	Wrapper,
} from "./styles";

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
				<Grid container gap={24} style={{ flex: 1 }}>
					<IconContainer>
						<IcSum width={32} color="#2F88FF" />
					</IconContainer>
					<Grid container flexDirection="column" gap={10} style={{ flex: 1 }}>
						<Text variant="h4" style={{ fontSize: "16px", lineHeight: "24px" }}>
							850 / 1000 participants
						</Text>
						<Grid container gap={16}>
							<progress value="3333" max="10000" style={{ width: "265px" }}></progress>
							<span style={{ fontFamily: fontFamilies.poppins }}>35%</span>
						</Grid>
					</Grid>
					<Grid container alignItems="center">
						<ButtonExport>
							<IcFile width={20} color="transparent" />
							<span>Export</span>
						</ButtonExport>
					</Grid>
				</Grid>
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
