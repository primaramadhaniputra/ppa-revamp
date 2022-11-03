import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import { fontSizing, fontWeights } from "utils/styles";

const TitleHcga = () => {
	return (
		<Grid
			style={{ margin: "30px 0 30px" }}
			container
			alignItems="center"
			justifyContent="space-between"
		>
			<TitlePage
				type="h4"
				styles={{
					fontSize: fontSizing.md.fontSize,
					fontWeight: fontWeights.bold,
				}}
			>
				HCGA
			</TitlePage>
		</Grid>
	);
};

export default TitleHcga;
