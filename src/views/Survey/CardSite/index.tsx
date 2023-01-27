import { Grid } from "@hudoro/neron";
import Image from "next/image";
import Link from "next/link";
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
}

const CardSite = ({ reportCriteria }: IProps) => {
	return (
		<CardSiteContainer>
			{reportCriteria.length > 0
				? reportCriteria.map((item, index) => (
						<Link href={`survey/${item.id}`}>
							<StyledCard key={index}>
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
								<TextDesc style={{ margin: "0 0 0 10px" }} />
							</StyledCard>
						</Link>
				  ))
				: null}
		</CardSiteContainer>
	);
};

export default React.memo(CardSite);
