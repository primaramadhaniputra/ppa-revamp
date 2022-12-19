import { Grid } from "@hudoro/neron";
import React from "react";
import Mess from "./Mess";
import Minning from "./Minnings";

const Request = () => {
	return (
		<Grid>
			<Minning />
			<Mess />
		</Grid>
	);
};

export default Request;
