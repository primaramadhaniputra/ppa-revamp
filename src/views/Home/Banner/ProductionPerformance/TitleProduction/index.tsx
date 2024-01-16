import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
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
			<p className="font-montserrat font-medium">Production Performance</p>
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
