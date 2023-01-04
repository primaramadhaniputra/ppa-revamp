import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { IcEdit, IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import FormUpdateDate from "./FormUpdateDate";
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

const columnHelper = createColumnHelper<Person>()

export default function In() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowUpdateDate, setIsShowUpdateDate] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);
	const [isShowFormIn, setIsShowFormIn] = React.useState(false);
	const [formInPosition, setformInPosition] = React.useState(0);

	const handleShowFormIn = (target: { pageY: number; clientY: number }) => {
		setIsShowFormIn(true);
		setformInPosition(target.pageY - target.clientY);
	};

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowUpdateDate(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Action" ? (
				<Grid container alignItems="center" justifyContent="center" gap={3}>
					<IcEye width={16} color={colors.blue} cursor="pointer" onClick={handleShowFormIn} />
					<IcEdit width={16} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
				</Grid>
			) : (
				info.getValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<FormUpdateDate
				isShowDetail={isShowUpdateDate}
				setIsShowDetail={setIsShowUpdateDate}
				formPosition={formPosition}
			/>
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
