import { Grid, Icon } from "@hudoro/neron";
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
import ShowDetail from "./ShowDetail";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { ThItemContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		["Waktu Kejadian"]: "2022-10-12||10.30",
		["NRP"]: "Hd123",
		["Nama"]: `33${index}`,
		["Posisi"]: "Sayap kanan",
		["Sanksi"]: "ee gak tau",
		["Jenis"]: "2022-17-08 02:12:12",
		["Status"]: "AKTIF",
		["Detail"]: "2022-17-08 02:12:12",
	};
});

export default function SuratPelanggaran() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "Detail" ? (
					<Grid container justifyContent="center" gap={30}>
						<Icon
							iconName="IcEye"
							size={24}
							style={{ cursor: "pointer" }}
							onClick={handleShowDetail}
						/>
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<ThItemContainer>
					<span>{item}</span>
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
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Wrapper>
				<WrapperTitle>
					<TitleText>Surat Pelanggaran</TitleText>
				</WrapperTitle>
				<TopFilter noDate={true}>
					<Grid style={{ minWidth: "200px" }}>
						<RevisiDropdown placeholder="Loader" />
					</Grid>
					<Grid style={{ minWidth: "200px" }}>
						<RevisiDropdown placeholder="Loader" />
					</Grid>
				</TopFilter>
				<WrapperTable>
					<TableFilterSearch
						table={table}
						handleChangeTotalShowData={handleChangeTotalShowData}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
						withButton={false}
						buttonTitle="EXPORT"
					/>
					<TableComponent2 table={table} />
				</WrapperTable>
			</Wrapper>
		</>
	);
}
