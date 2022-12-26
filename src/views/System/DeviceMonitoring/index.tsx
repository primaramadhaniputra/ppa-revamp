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
import TopFilter from "src/components/organism/TopFilter";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { Grid } from "@hudoro/neron";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Tanggal: "HD787",
		NRP: "Hd123",
		Nama: `33`,
		Posisi: "2022-17-08",
		Status: "2022-17-08",
		Time: "2022-17-08 02:12:12",
		Mac: "2022-17-08 02:12:12",
	},
];

const data = ["a", "b", "c"];

export default function DeviceMonitoring() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeDropDown, setactiveDropDown] = React.useState([]);

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => {
				return (
					<THContainer>
						<span key={index}>{item}</span>
					</THContainer>
				);
			},
			footer: (props) => props.column.id,
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
			<TopFilter>
				<Grid style={{ flex: 1 }} container>
					<StyledDropdownMenu
						title="Status"
						activeDropdown={activeDropDown}
						setActiveDropdown={setactiveDropDown}
						data={data}
					/>
				</Grid>
			</TopFilter>
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
