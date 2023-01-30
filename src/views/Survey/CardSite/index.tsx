import { Grid } from "@hudoro/neron";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ISurveyReportCriteria } from "utils/interfaces";
import {
	CardSiteContainer,
	CardTitle,
	LogoContainer,
	StyledCard,
	SubTitle,
	TextDesc,
} from "../styles";

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

const CardSite = ({ reportCriteria, periodeId }: IProps) => {
	const router = useRouter();

	const handleRedirect = (companyId: string, total: number, average: number) => {
		Cookies.set("total", total.toString());
		Cookies.set("average", average.toString());
		Cookies.set("periodeId", periodeId);
		Cookies.set("companyId", companyId);
		return router.push(`survey/${periodeId}/${companyId}`);
	};

	return (
		<CardSiteContainer>
			{reportCriteria.length > 0
				? reportCriteria.map((item, index) => (
						<StyledCard
							key={index}
							onClick={() => handleRedirect(item.id, item.total, item.average)}
						>
							<LogoContainer>
								<Image alt="Site Logo" src={item.image} width={40} height={40} quality={100} />
							</LogoContainer>
							<Grid
								container
								flexDirection="column"
								justifyContent="space-between"
								style={{ marginLeft: "24px" }}
								gap={10}
							>
								<Grid>
									<CardTitle>{item.name}</CardTitle>
								</Grid>
								<Grid container alignItems="flex-end" gap={40}>
									<Grid container flexDirection="column">
										<SubTitle>Total</SubTitle>
										<CardTitle>{item.total}</CardTitle>
									</Grid>
									<Grid container flexDirection="column">
										<SubTitle>Rata Rata</SubTitle>
										<CardTitle>{item.average.toFixed(2)}</CardTitle>
									</Grid>
								</Grid>
							</Grid>
							<TextDesc colorType={renderColor(item.average)} />
						</StyledCard>
				  ))
				: null}
		</CardSiteContainer>
	);
};

export default React.memo(CardSite);
