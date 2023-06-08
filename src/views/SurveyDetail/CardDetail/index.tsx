import React, { useState } from "react";
import dynamic from "next/dynamic";
import SingleCard from "./SingleCard";
import { Wrapper } from "./styles";
import { Grid } from "@hudoro/neron";
import Tabs from "./Tabs";
import FilterAscDesc from "./FIlter";

const DynamicCriticism = dynamic(() => import("./Criticism"), {
	ssr: false,
});
const DynamicPartisipan = dynamic(() => import("./Paritisipan"), {
	ssr: false,
});

const tabsText = ["Performance", "Kritik & Saran", "Partisipan"];

const CardDetail = () => {
	const [isSort, setIsSort] = useState(false);
	const [tabContent, setTabContent] = useState("Performance");

	const renderContent = (tabContent: string) => {
		if (tabContent == "Performance") {
			return <SingleCard isSort={isSort} />;
		} else if (tabContent == "Kritik & Saran") {
			return <DynamicCriticism />;
		} else {
			return <DynamicPartisipan />;
		}
	};

	return (
		<Wrapper>
			<Grid container alignItems="center" gap={24} justifyContent="space-between">
				<Tabs tabContent={tabContent} setTabContent={setTabContent} />
				{tabContent === tabsText[0] && <FilterAscDesc isSort={isSort} setIsSort={setIsSort} />}
			</Grid>
			{renderContent(tabContent)}
		</Wrapper>
	);
};

export default CardDetail;
