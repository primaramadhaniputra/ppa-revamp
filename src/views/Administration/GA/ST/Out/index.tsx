import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import SuratTugasMasuk from "./SuratTugasMasuk";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No Dokumen"]: "",
		["NRP"]: "",
		["Name"]: "",
		["Dept"]: "",
		["Tgl Awal Cuti"]: "",
		["Tgl Akhir Cuti"]: "",
		["Tgl Induksi"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Out() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowFormIn, setIsShowFormIn] = React.useState(false);
	const [formInPosition, setformInPosition] = React.useState(0);

	const handleShowFormIn = (target: { pageY: number; clientY: number }) => {
		setIsShowFormIn(true);
		setformInPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEye width={16} color={colors.blue} cursor="pointer" onClick={handleShowFormIn} />
				) : (
					info.getValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<SuratTugasMasuk
				isShowDetail={isShowFormIn}
				setIsShowDetail={setIsShowFormIn}
				formPosition={formInPosition}
			/>
			<TopFilter />
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
