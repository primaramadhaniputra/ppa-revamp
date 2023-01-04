import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["MainPlant"]: "-",
		["Storage location"]: "-",
		["Gas station"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Station() {
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
					<IcEdit width={18} color={colors.blue} onClick={handleShowDetail} />
				) : (
					info.getValue()
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
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
