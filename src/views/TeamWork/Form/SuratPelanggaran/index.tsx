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
import IcPrinter from "atoms/Icon/IcPrinter";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { THContainer } from "atoms/THContainer";
import CompleteArrow from "atoms/CompleteArrow";
import TabV2 from "molecules/TabV2";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import ShowFormPelanggaran from "./ShowFormPelanggaran";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["No"]: "HD787",
		["Date"]: "Hd123",
		["NRP"]: `331`,
		["Name"]: "2022-17-08",
		["Posisi"]: "2022-17-08",
		["Jenis"]: "2022-17-08 02:12:12",
		["Tempat"]: "2022-17-08 02:12:12",
		["Action"]: "2022-17-08 02:12:12",
	};
});

const tabTitle = [
	"Sanksi Teguran",
	"Sanksi Peringatan Pertama",
	"Sanksi Peringatan Kedua",
	"Sanksi Peringatan Terakhir",
];

export default function SuratPelanggaran() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeTab, setActiveTab] = React.useState(0);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowForm, setIsShowForm] = React.useState(false);
	const [formPelanggaranPosition, setformPelanggaranPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowFormPelanggaran = (target: { pageY: number; clientY: number }) => {
		setIsShowForm(true);
		setformPelanggaranPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		<div>
			<button onClick={() => window.print()}>PRINT</button>
			<p>Click above button opens print preview with these words on page</p>
		</div>;
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "Action" ? (
					<Grid container justifyContent="center" gap={10}>
						<IcPrinter
							width={20}
							color={colors.blue}
							style={{ cursor: "pointer" }}
							onClick={() => window.print()}
						/>
						<IcEye
							width={20}
							color={colors.blue}
							style={{ cursor: "pointer" }}
							onClick={handleShowDetail}
						/>
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<THContainer>
					<span>{item}</span>
					<CompleteArrow />
				</THContainer>
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
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<ShowFormPelanggaran
				isShowDetail={isShowForm}
				setIsShowDetail={setIsShowForm}
				formPosition={formPelanggaranPosition}
			/>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<LayoutTable>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					onClick={handleShowFormPelanggaran}
				>
					<TitleText> Data Pelanggaran Aktif Karyawan</TitleText>
					<ButtonFile title="INPUT" />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={false}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</LayoutTable>
		</>
	);
}
