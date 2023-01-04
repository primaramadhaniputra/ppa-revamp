import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import TopFilter from "src/components/organism/TopFilter";
import { IcEdit } from "atoms/Icon";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["Code Number"]: "-",
		["Model"]: "-",
		["Category"]: "-",
		["Owner"]: "-",
		["ABC Activity"]: "-",
		["ABC Sub Activity"]: "-",
		["Group"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Daily() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Action" ? (
				<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
			) : (
				info.renderValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Unit Population</TitleText>
			</WrapperTitle>
			<TopFilter />
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
