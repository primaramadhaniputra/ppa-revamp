import { Grid } from "@hudoro/neron";
import React from "react";
import { THContainer } from "atoms/THContainer";
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
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import FlyingForm from "./FlyingForm";

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

	// leave app
	const [isShowLeaveApp, setIsShowLeaveApp] = React.useState(false);
	const [formLeaveAppPosition, setformLeaveAppPosition] = React.useState(0);

	const handleShowLeaveApp = (target: { pageY: number; clientY: number }) => {
		setIsShowLeaveApp(true);
		setformLeaveAppPosition(target.pageY - target.clientY);
	};

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "id",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>ID</span>
				</THContainer>
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
						<THContainer>
							<span>Lapangan</span>
						</THContainer>
					),
				},
				{
					accessorKey: "tahunan",
					header: () => (
						<THContainer>
							<span>Tahunan</span>
						</THContainer>
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
						<THContainer>
							<span>Leave</span>
						</THContainer>
					),
				},
				{
					accessorKey: "back",
					header: () => (
						<THContainer>
							<span>Back</span>
						</THContainer>
					),
				},
			],
		},
		{
			accessorKey: "status",
			header: () => (
				<THContainer>
					<span>Status</span>
				</THContainer>
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
				<THContainer>
					<span>Action</span>
				</THContainer>
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
			<FlyingForm
				isShowDetail={isShowLeaveApp}
				setIsShowDetail={setIsShowLeaveApp}
				formPosition={formLeaveAppPosition}
			/>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					onClick={handleShowLeaveApp}
				>
					<TitleText>Leaving Application</TitleText>
					<ButtonFile title="LEAVE APPLICATION" />
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
