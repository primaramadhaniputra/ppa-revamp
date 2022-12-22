import { Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import { Container } from "./styles";

const UserCard = () => {
	return (
		<Container>
			<Grid className="userIcon">
				<Icon iconName="IcUser" size={52 as 32} color="white" />
			</Grid>
			<Grid className="userDesc">
				<Text variant="h4">MANPOWER AMM</Text>
				<Text variant="h4">2730</Text>
				<Text variant="p">Achievement Data All : 99.8 %</Text>
			</Grid>
		</Container>
	);
};

export default UserCard;
