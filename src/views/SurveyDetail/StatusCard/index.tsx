import { Grid } from "@hudoro/neron";
import { IcAverage, IcScore, IcSum } from "atoms/Icon";
import React from "react";
import { Container, IconContainer, StatusText, StyledCard, ValueText } from "./styles";

const StatusCard = () => {
	return (
		<Container>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IconContainer>
						<IcSum width={32} color="#2F88FF" />
					</IconContainer>
					<Grid container flexDirection="column" gap={10}>
						<StatusText>Total</StatusText>
						<ValueText>17</ValueText>
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
						<ValueText>17</ValueText>
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
						<ValueText>Good</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
		</Container>
	);
};

export default StatusCard;
