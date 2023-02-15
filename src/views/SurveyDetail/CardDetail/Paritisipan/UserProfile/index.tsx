import { Avatar, Grid } from "@hudoro/neron";
import React from "react";
import { Container, UserJob, UserName } from "./styles";

const UserProfile = () => {
	return (
		<Grid>
			<Container>
				<Avatar size="l" alt="userProfile" src="/logo/ppa.jpg" />
				<Grid>
					<UserName>Nom Nom</UserName>
					<UserJob>PT Makmur Lestari Primata</UserJob>
				</Grid>
			</Container>
			<Container>
				<Avatar size="l" alt="userProfile" src="/logo/ppa.jpg" />
				<Grid>
					<UserName>Nom Nom</UserName>
					<UserJob>PT Makmur Lestari Primata</UserJob>
				</Grid>
			</Container>
			<Container>
				<Avatar size="l" alt="userProfile" src="/logo/ppa.jpg" />
				<Grid>
					<UserName>Nom Nom</UserName>
					<UserJob>PT Makmur Lestari Primata</UserJob>
				</Grid>
			</Container>
		</Grid>
	);
};

export default UserProfile;
