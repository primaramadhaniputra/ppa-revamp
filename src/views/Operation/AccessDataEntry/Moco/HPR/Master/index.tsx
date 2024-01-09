import { Grid } from "@hudoro/neron";
import React from "react";
import { useViewport } from "utils/hooks";
import Area from "./Area";
import Disposal from "./Disposal";
import Pit from "./Pit";
import Seam from "./Seam";

const Master = () => {
	const { width } = useViewport();

	return (
		<Grid container={Number(width) > 800} gap={20}>
			<Area />
			<Pit />
			<Seam />
			<Disposal />
		</Grid>
	);
};

export default Master;
