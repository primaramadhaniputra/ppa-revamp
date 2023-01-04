import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { IcEdit } from "atoms/Icon";
import { colors } from "utils/styles";
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
		["Building"]: "-",
		["Type"]: "-",
		["Room"]: "-",
		["Capacity"]: "-",
		["Guest"]: "-",
		["Available"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function DataKamarTersedia({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEdit width={16} color={colors.blue} cursor="pointer" />
				) : (
					info.getValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Data Kamar Tersedia"
			>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutOverlayData>
		</>
	);
}
