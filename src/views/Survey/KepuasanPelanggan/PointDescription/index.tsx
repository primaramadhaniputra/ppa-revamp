import React from "react";
import { CardTitle, Container, PointContainer, StyledCard } from "./styles";

const PointDescription = () => {
	return (
		<StyledCard>
			<CardTitle>Keterangan :</CardTitle>
			<Container>
				<PointContainer pointColor="#FF0000">Need improvement(kurang)</PointContainer>
				<PointContainer pointColor="#FFFF04">Enough (Cukup)</PointContainer>
				<PointContainer pointColor="#008001">Good (bagus)</PointContainer>
				<PointContainer pointColor="#800080">Excellent (bagus sekali)</PointContainer>
			</Container>
		</StyledCard>
	);
};

export default React.memo(PointDescription);
