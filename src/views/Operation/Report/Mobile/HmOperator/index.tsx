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
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-09-30",
		["Shift"]: "D",
		["NRP"]: "1231231",
		["Name"]: "RUDI KURNIA LUGAS",
		["Dept"]: "HCG",
		["Unit"]: "AMM01",
		["HM Start"]: "100715.00",
		["HM Stop"]: "100715.00",
		["HM"]: "56.00",
		["Activity"]: "Non PPA Non Fleet",
		["Parking"]: "-",
	};
});

export default function HmOperator() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
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
			<LayoutTable>
				<TitleText>REPORT HM OPERATOR</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</LayoutTable>
		</>
	);
}
