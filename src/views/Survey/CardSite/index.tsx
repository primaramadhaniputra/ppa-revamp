import { Grid, Text } from "@hudoro/neron";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ISurveyReportCriteria } from "utils/interfaces";
import Tilt from "react-parallax-tilt";
import {
	CardSiteContainer,
	CardTitle,
	LogoContainer,
	StyledCard,
	SubTitle,
	TextDesc,
} from "../styles";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";

interface IProps {
	reportCriteria: ISurveyReportCriteria[];
	periodeId: string;
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

const CardSite = ({ reportCriteria, periodeId }: IProps) => {
	const router = useRouter();
	const periode = useSurveyPeriodeValue();

	const handleRedirect = (companyId: string, total: string, average: number, siteName: string) => {
		Cookies.set("total", total.toString());
		Cookies.set("average", average?.toString());
		Cookies.set("site", siteName);
		Cookies.set("periode", periode[0].label);
		return router.push(`survey/${periodeId}/${companyId}`);
	};

	return (
		<CardSiteContainer>
			{reportCriteria.length > 0
				? reportCriteria.map((item, index) => (
						<Tilt
							perspective={500}
							style={{ flex: 1, display: "flex", transformStyle: "preserve-3d" }}
							glareEnable={true}
							glareMaxOpacity={0.5}
							glareColor="#666"
							glarePosition="all"
							glareBorderRadius="10px"
							key={index}
						>
							<StyledCard
								onClick={() =>
									handleRedirect(
										item.id,
										item.assessmentCriteria.statusUser,
										item.assessmentCriteria.average,
										item.name,
									)
								}
							>
								<TextDesc
									colorType={renderColor(item.assessmentCriteria.average)}
									title={renderTextAverage(item.assessmentCriteria.average)}
								/>
								<Grid
									container
									flexDirection="row"
									gap={24}
									style={{ transformStyle: "preserve-3d" }}
								>
									<LogoContainer>
										<Image alt="Site Logo" src={item.image} width={40} height={40} quality={100} />
									</LogoContainer>
									<Grid
										container
										flexDirection="column"
										gap={10}
										style={{ flex: 1, transformStyle: "preserve-3d" }}
									>
										<Grid style={{ transformStyle: "preserve-3d" }}>
											<CardTitle>{item.name}</CardTitle>
										</Grid>
										<Grid>
											<Text variant="mute" style={{ fontSize: "14px" }}>
												{item.parentCompany}
											</Text>
										</Grid>
										<Grid container alignItems="flex-end" gap={28}>
											<Grid container flexDirection="column">
												<SubTitle>Total</SubTitle>
												<CardTitle>{item.assessmentCriteria.statusUser}</CardTitle>
											</Grid>
											<Grid container flexDirection="column">
												<SubTitle>Rata Rata</SubTitle>
												<CardTitle>{item.assessmentCriteria.average?.toFixed(2) ?? 0}</CardTitle>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</StyledCard>
						</Tilt>
				  ))
				: null}
		</CardSiteContainer>
	);
};

export default React.memo(CardSite);
