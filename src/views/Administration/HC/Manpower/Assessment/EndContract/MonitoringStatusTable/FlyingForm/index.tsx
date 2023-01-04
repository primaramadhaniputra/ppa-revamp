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

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "-",
		["NRP"]: "-",
		["Name"]: "-",
		["Dept"]: "-",
		["Posisi"]: "-",
		["Status saat ini"]: "-",
		["Date start"]: "-",
		["Date end"]: "-",
		["status"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="LIST MANPOWER DEPT ENG STATUS PENILAIAN SIGNING"
			>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutOverlayData>
		</>
	);
}
