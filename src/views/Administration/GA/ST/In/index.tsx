import { Grid } from "@hudoro/neron";
import React from "react";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, WrapperTable } from "../../../styles";
import TopFilter from "src/components/organism/TopFilter";
import { IcEdit, IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import FormUpdateDate from "./FormUpdateDate";
import SuratTugasMasuk from "./SuratTugasMasuk";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No.Dokumen"]: "",
		["NRP"]: "",
		["Name"]: "",
		["Dept"]: "",
		["Tgl.Awal Cuti"]: "",
		["Tgl.Akhir Cuti"]: "",
		["Tgl.Induksi"]: "",
		["Action"]: "",
	};
});

export default function In() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
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

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<Grid container alignItems="center" justifyContent="center" gap={3}>
						<IcEye width={16} color={colors.blue} cursor="pointer" onClick={handleShowFormIn} />
						<IcEdit width={16} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
					</Grid>
				) : (
					info.getValue()
				),
			header: () => (
				<ThItemContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
					<CompleteArrow />
				</ThItemContainer>
			),
		};
	});
	const table = useReactTable({
		data: defaultDataTable,
		columns,
		state: {
			sorting,
			rowSelection,
			globalFilter,
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});

	const handleChangeTotalShowData = (e: { target: { value: number } }) => {
		table.setPageSize(e.target.value);
	};

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
			<WrapperTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</WrapperTable>
		</>
	);
}
