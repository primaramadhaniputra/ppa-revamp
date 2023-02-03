import React, { useMemo, useState } from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import SingleCard from "./SingleCard";
import Masonry from "react-masonry-css";
import {
	FilterContainer,
	FilterIcon,
	FilterText,
	PopupNotifications,
	TabsText,
	Wrapper,
} from "./styles";
import { IcFilterList } from "atoms/Icon";
import { Grid } from "@hudoro/neron";

interface Iprops {
	dataReport: ISurveyReportCriteriaDetail[];
}

const breakpointColumnsObj = {
	default: 2,
	1200: 2,
	800: 1,
	500: 1,
};

const tabsText = ['Performance', 'Kritik & Saran']

const CardDetail = ({ dataReport }: Iprops) => {
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

	const handleChangeActiveContent = (type: string) => {
		setTabContent(type);
	};

	return (
		<Wrapper>
			<Grid container alignItems="center" gap={24} justifyContent="space-between">
				<Grid container>
					{tabsText.map((item, index) =>
						<Grid container key={index} style={{ position: "relative" }}>
							<TabsText
								isActiveContent={tabContent === item}
								onClick={() => handleChangeActiveContent(item)}
							>
								{item}
							</TabsText>
							{index === 1 && <PopupNotifications>1</PopupNotifications>}
						</Grid>)}
				</Grid>
				<Grid container gap={24} alignItems="center" justifyContent="flex-end">
					<FilterText style={{ fontWeight: "400" }}>Urutan Item</FilterText>
					<FilterContainer onClick={() => setIsSort(!isSort)}>
						<FilterIcon isRotateIcon={isSort}>
							<IcFilterList width={24} />
						</FilterIcon>
						<FilterText>{isSort ? "Terendah" : "Tertinggi"}</FilterText>
					</FilterContainer>
				</Grid>
			</Grid>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{newData.map((item, index) => (
					<SingleCard key={index} data={item} />
				))}
			</Masonry>
		</Wrapper>
	);
};

export default CardDetail;
