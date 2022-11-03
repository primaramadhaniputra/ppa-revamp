import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { fontSizing, fontWeights } from "utils/styles";
import ProductionPerformanceTabHeader from "./ProductionPerformanceTabHeader";
import { Container } from "../styles";

const tabsText = ["YTD", "MTD", "WTD"];

const TitleProduction = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Grid
			style={{ margin: "0 0 20px" }}
			container
			alignItems="center"
			justifyContent="space-between"
		>
			<TitlePage
				type="h4"
				styles={{
					fontSize: fontSizing.md.fontSize,
					fontWeight: fontWeights.bold,
				}}
			>
				Production Performance
			</TitlePage>
			<Container>
				{tabsText.map((item, index) => (
					<ProductionPerformanceTabHeader
						title={item}
						key={index}
						id={index}
						setActiveTab={setActiveTab}
						activeTab={activeTab}
					/>
				))}
			</Container>
		</Grid>
	);
};

export default TitleProduction;
