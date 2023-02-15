import React from "react";
import { Container } from "./styles";
import UserProfile from "./UserProfile";
import UserSurvey from "./UserSurvey";

const Partisipan = () => {
	return (
		<Container>
			<UserProfile />
			<UserSurvey />
		</Container>
	);
};

export default Partisipan;
