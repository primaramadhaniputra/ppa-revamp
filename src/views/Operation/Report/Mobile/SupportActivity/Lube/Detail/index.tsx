import { Grid } from "@hudoro/neron";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";
import CompleteArrow from "atoms/CompleteArrow";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import TopFilter from "src/components/organism/TopFilter";
import { ThItemContainer } from "views/SHE/Report/styles";
import { WrapperTable } from "../../../styles";
import { TableWrapper } from "../styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["Model"]: "-",
		["Break Coolant"]: "-",
		["Damper"]: "-",
		["Differential"]: "-",
		["Engine"]: "-",
		["Final Drive"]: "-",
		["Hydroulic"]: "-",
		["Power Take Off"]: "-",
		["Swing Circle"]: "-",
		["Swing Machinery"]: "-",
		["Tandem"]: "-",
		["Transmission"]: "-",
		["Black"]: "-",
		["Total"]: "-",
	};
});

const dataDummy = ["a", "b", "c"];

export default function Detail() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [activeDropdown, setActiveDropdown] = React.useState([]);
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer key={index}>
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
		<TableWrapper>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<StyledDropdownMenu
						title="Model"
						activeDropdown={activeDropdown}
						setActiveDropdown={setActiveDropdown}
						data={dataDummy}
					/>
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Material" />
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
		</TableWrapper>
	);
}
