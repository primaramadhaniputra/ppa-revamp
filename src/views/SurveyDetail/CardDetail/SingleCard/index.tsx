import { Grid } from "@hudoro/neron";
import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import { CardTitle, DescriptionText, StyledCard, PoinText, Progress, LegendText } from "./styles";

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

const renderTextAverage = (evaluationNumber: number) => {
	if (evaluationNumber < 3) {
		return "Under Performance (Kurang Sekali)";
	} else if (evaluationNumber < 5) {
		return "Need Improvement (Kurang)";
	} else if (evaluationNumber < 7) {
		return "Enough (Cukup)";
	} else if (evaluationNumber < 9) {
		return "Good (Bagus)";
	} else {
		return "Excellent (Bagus Sekali)";
	}
};

const SingleCard = ({ data }: IProps) => {
	return (
		<StyledCard>
			<CardTitle>{data.name}</CardTitle>
			<Grid container flexDirection="column" style={{ marginTop: "32px" }} gap={24}>
				{data.questions.map((item, key) => (
					<Grid key={key}>
						<Grid container gap={20} justifyContent="space-between" alignItems="center">
							<Grid>
								<DescriptionText>{item.name}</DescriptionText>
							</Grid>
							<PoinText>({item.average.toFixed(2)})</PoinText>
						</Grid>
						<Grid container flexDirection="column" gap={4}>
							<Progress
								value={item.average.toFixed(2)}
								max="10"
								progressColor={renderColor(item.average)}
								title={renderTextAverage(item.average)}
							/>
							<LegendText>Ket : {renderTextAverage(item.average)}</LegendText>
						</Grid>
					</Grid>
				))}
			</Grid>
		</StyledCard>
	);
};

export default SingleCard;
