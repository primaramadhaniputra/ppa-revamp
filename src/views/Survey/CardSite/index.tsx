import { Grid } from "@hudoro/neron";
import Image from "next/image";
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

export const CardSite = () => {
	return (
		<CardSiteContainer>
			{DummyData.map((item, index) => (
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
						style={{ flex: 1, marginLeft: "24px" }}
					>
						<CardTitle>{item}</CardTitle>
						<Grid container alignItems="flex-end" gap={24}>
							<Grid>
								<SubTitle>Total</SubTitle>
								<CardTitle>154</CardTitle>
							</Grid>
							<Grid>
								<SubTitle>Rata Rata</SubTitle>
								<CardTitle>7.7</CardTitle>
							</Grid>
						</Grid>
					</Grid>
					<TextDesc>Good</TextDesc>
				</StyledCard>
			))}
		</CardSiteContainer>
	);
};
