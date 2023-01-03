import { Grid } from "@hudoro/neron";
import React from "react";
import Pagination from "src/components/organism/Pagination";
import { StyledText } from "./styles";

interface IProps {
	dataPerPage: number;
	totalData: number;
	currentPage: number;
	totalPage: number;
	nextButtonEvent: () => void;
	previousButtonEvent: () => void;
}

export default function BottomPagination({
	dataPerPage,
	totalData,
	currentPage,
	totalPage,
	nextButtonEvent,
	previousButtonEvent,
}: IProps) {
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			style={{ marginTop: "20px" }}
			gap={20}
		>
			<StyledText>
				Showing {dataPerPage} of {totalData} Total Rows Selected
			</StyledText>
			<Pagination
				numberOfPages={totalPage}
				currentPage={currentPage}
				nextButtonEvent={nextButtonEvent}
				previousButtonEvent={previousButtonEvent}
			/>
		</Grid>
	);
}
