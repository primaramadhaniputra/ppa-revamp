import React, { useMemo, useState } from "react";
import { ISurveyReportCriteriaDetail, ISurveyReportCriticism } from "utils/interfaces";
import dynamic from "next/dynamic";
import SingleCard from "./SingleCard";
import Masonry from "react-masonry-css";
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

interface Iprops {
	dataReport: ISurveyReportCriteriaDetail[];
	criticism: ISurveyReportCriticism[];
}

const breakpointColumnsObj = {
	default: 2,
	1200: 2,
	800: 1,
	500: 1,
};

const tabsText = ["Performance", "Kritik & Saran", "Partisipan"];

const CardDetail = ({ dataReport, criticism }: Iprops) => {
	const [isSort, setIsSort] = useState(false);
	const [tabContent, setTabContent] = useState("Performance");

	const newData = useMemo(() => {
		return dataReport.map((item) => {
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
		});
	}, [isSort]);

	const renderContent = (tabContent: string) => {
		if (tabContent == "Performance") {
			return (
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{newData.map((item, index) => (
						<SingleCard key={index} data={item} />
					))}
				</Masonry>
			);
		} else if (tabContent == "Kritik & Saran") {
			return (
				<Grid style={{ marginTop: "24px" }}>
					{criticism.map((item, key) => (
						<DynamicCriticism key={key} data={item} />
					))}
				</Grid>
			);
		} else {
			return <DynamicPartisipan />;
		}
	};

	return (
		<Wrapper>
			<Grid container alignItems="center" gap={24} justifyContent="space-between">
				<Tabs
					tabContent={tabContent}
					setTabContent={setTabContent}
					notifications={criticism.length}
				/>
				{tabContent === tabsText[0] && <FilterAscDesc isSort={isSort} setIsSort={setIsSort} />}
			</Grid>
			{renderContent(tabContent)}
		</Wrapper>
	);
};

export default CardDetail;
