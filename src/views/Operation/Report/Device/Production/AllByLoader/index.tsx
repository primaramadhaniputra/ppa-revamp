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
import TopFilter from "src/components/organism/TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, WrapperTable } from "../../styles";
import RevisiDropdown from "atoms/RevisiDropdown";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-09-30",
		["Shift"]: "1",
		["CN"]: "H57060",
		["Loader"]: "E52005",
		["Material"]: "BL",
		["PIT"]: "SENTUK 40",
		["PLD(ton)"]: "102.4",
		["EST(min)"]: "1.3",
		["ES(km/h)"]: "24",
		["LS(km/h)"]: "24",
		["Speed(km/h)"]: "24",
		["EDT(min)"]: "8.4",
		["LDT(min)"]: "8.4",
		["LST(min)"]: "0.4",
		["LT(min)"]: "3.40",
		["LDD(km)"]: "3.4",
		["EDD(km)"]: "3.4",
		["CT(min)"]: "23.4",
		["Actual Date"]: "2022-09-30 06:16:05",
	};
});

export default function AllByLoader() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
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
			<TopFilter>
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
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</WrapperTable>
		</>
	);
}
