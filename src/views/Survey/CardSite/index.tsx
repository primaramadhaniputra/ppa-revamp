import { Grid } from "@hudoro/neron";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	CardSiteContainer,
	CardTitle,
	LogoContainer,
	StyledCard,
	SubTitle,
	TextDesc,
} from "../styles";

const DummyData = ["SITE BIB", "SITE SKS", "SITE MLP", "SITE BA"];

const CardSite = () => {
	return (
		<CardSiteContainer>
			{DummyData.map((item, index) => (
				<Link href="survey/1" passHref>
					<StyledCard key={index}>
						<LogoContainer>
							<Image
								alt="Site Logo"
								src={"/logo/production2.png"}
								width={40}
								height={40}
								quality={100}
							/>
						</LogoContainer>
						<Grid
							container
							flexDirection="column"
							justifyContent="space-between"
							style={{ marginLeft: "24px" }}
						>
							<CardTitle>{item}</CardTitle>
							<Grid container alignItems="flex-end" justifyContent="space-between" gap={24}>
								<Grid>
									<SubTitle>Total</SubTitle>
									<CardTitle>154</CardTitle>
								</Grid>
								<Grid container flexDirection="column">
									<SubTitle>Rata Rata</SubTitle>
									<CardTitle>7.7</CardTitle>
								</Grid>
							</Grid>
						</Grid>
						<TextDesc style={{ margin: "0 0 0 auto" }} />
					</StyledCard>
				</Link>
			))}
		</CardSiteContainer>
	);
};

export default React.memo(CardSite);
