import { Grid } from "@hudoro/neron";
import { IcSum } from "atoms/Icon";
import React from "react";
import { Container, StatusText, StyledCard, ValueText } from "./styles";

const StatusCard = () => {
	return (
		<Container>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IcSum width={62} />
					<Grid container flexDirection="column" alignItems="center" gap={10}>
						<StatusText>Total</StatusText>
						<ValueText>17</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IcSum width={62} />
					<Grid container flexDirection="column" alignItems="center" gap={10}>
						<StatusText>Total</StatusText>
						<ValueText>17</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
			<StyledCard>
				<Grid container gap={24} alignItems="center">
					<IcSum width={62} />
					<Grid container flexDirection="column" alignItems="center" gap={10}>
						<StatusText>Total</StatusText>
						<ValueText>17</ValueText>
					</Grid>
				</Grid>
			</StyledCard>
		</Container>
	);
};

export default StatusCard;
