import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
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
		["NRP"]: "-",
		["Nama"]: "-",
		["Perusahaan"]: "-",
		["Dept"]: "-",
		["Jabatan"]: "-",
		["Posisi"]: "-",
		["Mess"]: "-",
		["Kamar"]: "-",
		["No Bed"]: "-",
		["Tgl Huni"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function DataPenghuniMess({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Data Penghuni Mess"
			>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutOverlayData>
		</>
	);
}
