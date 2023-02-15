import { Grid } from "@hudoro/neron";
import { IcChat } from "atoms/Icon";
import UserNameWithPosition from "molecules/UserNameWithPosition";
import React from "react";
import { Container, Content, ContentValue, IconContainer, Title } from "./styles";

const KritikSaran = () => {
	return (
		<Container>
			<IconContainer>
				<IcChat width={24} />
			</IconContainer>
			<Grid>
				<Title>Kritik & saran</Title>
				<Content>
					<UserNameWithPosition name="Alex Manda" position="PT Makmur Lestari Primata" />
					<ContentValue>
						Lorem ipsum dolor sit amet consectetur. Tempus posuere blandit commodo vulputate elit
						leo.
					</ContentValue>
				</Content>
			</Grid>
		</Container>
	);
};

export default KritikSaran;
