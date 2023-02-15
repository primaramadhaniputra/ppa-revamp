import { Grid } from "@hudoro/neron";
import React from "react";
import HasilTest from "./HasilTest";
import KritikSaran from "./KritikSaran";

const UserSurvey = () => {
	return (
		<Grid>
			<KritikSaran />
			<HasilTest />
		</Grid>
	);
};

export default UserSurvey;
