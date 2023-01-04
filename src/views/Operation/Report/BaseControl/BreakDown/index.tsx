import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../styles";
import DataDetail from "./DataDetail";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["ID"]: "KT08/OPR/RPBD/2209/02440",
		["CN"]: "-",
		["Model"]: "-",
		["Problem Reported"]: "-",
		["Reported By"]: "-",
		["Categroy"]: "-",
		["HM BD"]: "-",
		["HM RFU"]: "-",
		["HM Used"]: "-",
		["Downtime"]: "-",
		["WO"]: "-",
		["Status"]: "-",
		["Breakdown Date"]: "-",
		["RFU Date"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function BreakDown() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "ID" ? (
					<span style={{ color: "blue", cursor: "pointer" }} onClick={handleShowDetail}>
						{info.renderValue()}
					</span>
				) : (
					info.renderValue()
				);
			},
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
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>BreakDown</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Status"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
				<Grid>
					<StyledDropdownMenu
						title="Model"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
