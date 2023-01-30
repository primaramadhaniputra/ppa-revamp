import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import SingleCard from "./SingleCard";
import Masonry from "react-masonry-css";

interface Iprops {
	dataReport: ISurveyReportCriteriaDetail[];
}

const breakpointColumnsObj = {
	default: 2,
	1200: 2,
	800: 1,
	500: 1,
};

const CardDetail = ({ dataReport }: Iprops) => {
	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{dataReport.map((item, index) => (
				<SingleCard key={index} data={item} />
			))}
		</Masonry>
	);
};

export default CardDetail;
