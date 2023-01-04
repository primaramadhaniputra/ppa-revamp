import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit } from "atoms/Icon";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["ID"]: "-",
		["Cn"]: "-",
		["Date"]: "-",
		["Category"]: "-",
		["Component"]: "-",
		["Damage"]: "-",
		["FT"]: "-",
		["HM BD"]: "-",
		["HM RFU"]: "-",
		["HM"]: "-",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function HmBreakdownRevision() {
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
			cell: (info) => {
				return info.column.id === "Action" ? (
					<IcEdit
						width={18}
						color={colors.blue}
						style={{ cursor: "pointer" }}
						onClick={handleShowDetail}
					/>
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
				<TitleText>HM Breakdown</TitleText>
			</WrapperTitle>
			<TopFilter noDate={true}>
				<Grid>
					<RevisiDropdown placeholder="Code Number" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
