import React from "react";
import { CardTitle, Container, PointContainer, StyledCard } from "./styles";

const PointDescription = () => {
	return (
		<StyledCard>
			<CardTitle>Keterangan :</CardTitle>
			<Container>
				<PointContainer pointColor="#fc5555">Under Performance (Kurang Sekali)</PointContainer>
				<PointContainer pointColor="#FFC806">Need Improvement (Kurang)</PointContainer>
				<PointContainer pointColor="#47BF34">Enough (Cukup)</PointContainer>
				<PointContainer pointColor="#0062A3">Good (Bagus)</PointContainer>
				<PointContainer pointColor="#7B61FF">Excellent (Bagus Sekali)</PointContainer>
			</Container>
		</StyledCard>
	);
};

export default PointDescription;
