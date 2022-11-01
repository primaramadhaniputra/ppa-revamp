import React from "react";
import RefuellingTransaction from "./RefuellingTransaction";
import DistributedFuel from "./DistributedFuel";
import { Grid } from "@hudoro/neron";

export default function Refueling() {
	return (
		<Grid container gap={50} flexDirection="column">
			<RefuellingTransaction />
			<DistributedFuel />
		</Grid>
	);
}
