import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "",
		["NRP"]: "",
		["Nama"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Keluar"]: "",
		["Keterangan"]: "",
		["Status"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function KaryawanAktif() {
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
				<IcEye width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
			) : (
				info.getValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>

			<LayoutTable style={{ marginTop: "20px" }}>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
