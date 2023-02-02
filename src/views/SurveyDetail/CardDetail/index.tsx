import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import SingleCard from "./SingleCard";
import Masonry from "react-masonry-css";
import { FilterContainer, FilterText, Wrapper } from "./styles";
import { IcFilterList } from "atoms/Icon";

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
		<Wrapper>
			<FilterContainer>
				<IcFilterList width={24} />
				<FilterText>Filter</FilterText>
			</FilterContainer>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{dataReport.map((item, index) => (
					<SingleCard key={index} data={item} />
				))}
			</Masonry>
		</Wrapper>
	);
};

export default CardDetail;
