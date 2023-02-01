import { Grid } from "@hudoro/neron";
import { IcBarsArrowDown, IcBarsArrowUp } from "atoms/Icon";
import React, { useMemo, useState } from "react";
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
	const [isSort, setIsSort] = useState(true);

	let Questions = data.questions || [];

	useMemo(() => {
		if (isSort) {
			return (Questions = Questions.sort((a, b) => a.average - b.average));
		} else {
			return (Questions = Questions.sort((a, b) => b.average - a.average));
		}
	}, [isSort]);

	return (
		<StyledCard>
			<Grid container alignItems="center" gap={10} justifyContent="space-between">
				<CardTitle>{data.name}</CardTitle>
				<Grid container style={{ cursor: "pointer" }} onClick={() => setIsSort(!isSort)}>
					{isSort ? <IcBarsArrowDown strokeWidth={1.9} width={24} /> : <IcBarsArrowUp strokeWidth={1.9} width={24} />}
				</Grid>
			</Grid>
			<Grid container flexDirection="column" style={{ marginTop: "32px" }} gap={24}>
				{Questions.map((item, key) => (
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
