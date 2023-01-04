import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { colors, fontWeights } from "utils/styles";
import { ShowChartWrapper, Wrapper } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import StyledButton from "atoms/StyledButton";
import { exportFile } from "utils/functions";
import RevisiDropdown from "atoms/RevisiDropdown";
import DataDetail from "./DataDetail";
import MigrateTable from "src/components/organism/MigrateTable";
import { Person } from "utils/interfaces";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		LOADER: "-",
		["06"]: "-",
		["07"]: `-`,
		["08"]: "-",
		["09"]: "-",
		["10"]: "-",
		["11"]: "-",
		["12"]: "-",
		["13"]: "-",
		["14"]: "-",
		["15"]: "-",
		["16"]: "-",
		["17"]: "-",
		["TOTAL"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function CCR() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);
	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<Wrapper>
				<Grid
					container
					gap={20}
					justifyContent="space-between"
					alignItems="center"
					style={{ margin: "20px 0" }}
				>
					<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
						Hourly Production
					</Text>
				</Grid>
				<ShowChartWrapper>
					<Grid>
						<StyledButton onClick={handleShowDetail}>Show Chart</StyledButton>
					</Grid>
					<Grid>
						<StyledButton style={{ backgroundColor: colors.borderBlue }} onClick={exportFile}>
							Export
						</StyledButton>
					</Grid>
				</ShowChartWrapper>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</Wrapper>
		</>
	);
}
