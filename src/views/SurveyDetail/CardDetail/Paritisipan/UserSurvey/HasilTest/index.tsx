import { Grid } from "@hudoro/neron";
import { IcScrollCheck } from "atoms/Icon";
import React from "react";
import { Container, Content, IconContainer, Title } from "./styles";

const HasilTest = () => {
	return (
		<Container>
			<IconContainer>
				<IcScrollCheck width={24} />
			</IconContainer>
			<Grid>
				<Title>Hasil Test</Title>
				<Content>she</Content>
			</Grid>
		</Container>
	);
};

export default HasilTest;
