import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NO"]: "1",
		["Date"]: "2022-10-19",
		["Shift"]: "D",
		["Model"]: "PC400LCSE-8",
		["Unit"]: "E5412",
		["HM"]: "0,00",
		["Distance"]: "",
		["Cycle"]: "",
		["Production"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="testing"
		>
			<Grid container alignItems="center" justifyContent="space-between">
				<Text variant="h4">19019713 - ANDIKA SETYO LAKSONO</Text>
			</Grid>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutOverlayData>
	);
}
