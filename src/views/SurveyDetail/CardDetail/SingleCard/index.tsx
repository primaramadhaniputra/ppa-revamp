import { Grid } from "@hudoro/neron";
import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import { CardTitle, DescriptionText, StyledCard, PoinText, Progress } from "./styles";

interface IProps {
	data: ISurveyReportCriteriaDetail;
}

const renderColor = (evaluationNumber: number) => {
	if (evaluationNumber < 3) {
		return "#FC5555";
	} else if (evaluationNumber < 5) {
		return "#FFC806";
	} else if (evaluationNumber < 7) {
		return "#47BF34";
	} else if (evaluationNumber < 9) {
		return "#0062A3";
	} else {
		return "#7B61FF";
	}
};

const SingleCard = ({ data }: IProps) => {
	return (
		<StyledCard>
			<CardTitle>{data.name}</CardTitle>
			<Grid container flexDirection="column" style={{ marginTop: "32px" }} gap={24}>
				{data.questions.map((item, key) => (
					<Grid key={key}>
						<Grid container gap={10} justifyContent="space-between">
							<Grid>
								<DescriptionText>{item.name}</DescriptionText>
							</Grid>
							<PoinText>({item.average.toFixed(1)})</PoinText>
						</Grid>
						<Progress
							value={item.average.toFixed(1)}
							max="10"
							progressColor={renderColor(item.average)}
						>
							70 %
						</Progress>
					</Grid>
				))}
			</Grid>
		</StyledCard>
	);
};

export default SingleCard;
