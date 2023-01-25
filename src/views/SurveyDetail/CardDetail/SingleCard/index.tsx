import { Grid } from "@hudoro/neron";
import React from "react";
import { CardTitle, DescriptionText, StyledCard, PoinText, Progress } from "./styles";

const SingleCard = () => {
	return (
		<StyledCard>
			<CardTitle>SHE</CardTitle>
			<Grid container flexDirection="column" style={{ marginTop: "32px" }} gap={24}>
				<Grid>
					<Grid container gap={10} justifyContent="space-between">
						<Grid>
							<DescriptionText>Kompetensi karyawan</DescriptionText>
						</Grid>
						<PoinText>(2,0)</PoinText>
					</Grid>
					<Progress value="60500" max="120000" progressColor="#0062a3">
						70 %
					</Progress>
				</Grid>
			</Grid>
		</StyledCard>
	);
};

export default SingleCard;
