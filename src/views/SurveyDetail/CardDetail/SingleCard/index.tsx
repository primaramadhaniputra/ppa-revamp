import { Grid } from "@hudoro/neron";
import React from "react";
import { IPromiseResult, ISurveyReportCriteriaDetail } from "utils/interfaces";
import { CardTitle, DescriptionText, StyledCard, PoinText, Progress, LegendText } from "./styles";
import { useRouter } from "next/router";
import { useAsync } from "utils/customHooks";
import { getDetailCriteriaReport } from "services/survey";
import Masonry from "react-masonry-css";

interface IProps {
	isSort: boolean;
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

const breakpointColumnsObj = {
	default: 2,
	1200: 2,
	800: 1,
	500: 1,
};

const SingleCard = ({ isSort }: IProps) => {
	const router = useRouter();

	const joinParams = (router.query.slug as string[])?.join("/");

	const { loading, response } = useAsync(
		() =>
			getDetailCriteriaReport({
				path: `${joinParams}`,
			}),
		[router.query.slug],
		true,
	);
	if (loading) return <h1>Loading...</h1>;

	const newData: ISurveyReportCriteriaDetail[] = (response as IPromiseResult).data.data.map(
		(item: ISurveyReportCriteriaDetail) => {
			if (isSort) {
				return {
					...item,
					questions: item.questions.sort((a, b) => a.average - b.average),
				};
			} else {
				return {
					...item,
					questions: item.questions.sort((a, b) => b.average - a.average),
				};
			}
		},
	);
	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{newData.map((value, index) => (
				<StyledCard key={index}>
					<Grid container alignItems="center" gap={10} justifyContent="space-between">
						<CardTitle>{value.name}</CardTitle>
					</Grid>
					<Grid container flexDirection="column" style={{ marginTop: "32px" }} gap={24}>
						{value.questions.map((item, key) => (
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
			))}
		</Masonry>
	);
};

export default SingleCard;
