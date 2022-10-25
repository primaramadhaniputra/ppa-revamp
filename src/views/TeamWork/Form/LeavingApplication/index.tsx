import { Grid } from "@hudoro/neron";
import React from "react";
import { FileContainer, ThItemContainer } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";

interface Person {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		id: "HD787",
		lapangan: "Hd123",
		tahunan: `33${index}`,
		leave: "2022-17-08",
		back: "2022-17-08",
		status: "2022-17-08 02:12:12",
		action: "",
	};
});

export default function LeavingApplication() {
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "id",
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer>
					<span>ID</span>
				</ThItemContainer>
			),
		},
		{
			header: "Cuti",
			columns: [
				{
					accessorFn: (row) => row.lapangan,
					id: "lapangan",
					cell: (info) => info.getValue(),
					header: () => (
						<ThItemContainer>
							<span>Lapangan</span>
						</ThItemContainer>
					),
				},
				{
					accessorKey: "tahunan",
					header: () => (
						<ThItemContainer>
							<span>Tahunan</span>
						</ThItemContainer>
					),
				},
			],
		},
		{
			header: "Date",
			columns: [
				{
					accessorKey: "leave",
					header: () => (
						<ThItemContainer>
							<span>Leave</span>
						</ThItemContainer>
					),
				},
				{
					accessorKey: "back",
					header: () => (
						<ThItemContainer>
							<span>Back</span>
						</ThItemContainer>
					),
				},
			],
		},
		{
			accessorKey: "status",
			header: () => (
				<ThItemContainer>
					<span>Status</span>
				</ThItemContainer>
			),
		},
		{
			accessorKey: "action",
			cell: () => (
				<Grid
					container
					justifyContent="center"
					style={{ cursor: "pointer" }}
					onClick={handleShowDetail}
				>
					<IcEye width={18} color={colors.blue} />
				</Grid>
			),
			header: () => (
				<ThItemContainer>
					<span>Action</span>
				</ThItemContainer>
			),
		},
	];

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
			<WrapperTitle>
				<TitleText>Leaving Application</TitleText>
				<FileContainer>
					<label htmlFor="file">Leave Application</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</WrapperTitle>
			<Wrapper>
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
