import TitlePage from "atoms/TitlePage";
import React from "react";
import { CardTitle, Container, StyledCard } from "./styles";

const Survey = () => {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<Container>
				<StyledCard>
					<CardTitle>Site BIB</CardTitle>
				</StyledCard>
			</Container>
		</>
	);
};

export default Survey;
