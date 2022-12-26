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
import { TitleText, WrapperTitle, Wrapper } from "../../../styles";
import { TextTable } from "./styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["Activity"]: "Coal Getting Cleaning",
		["Production"]: "298.503",
		["Distance"]: "2.879",
		["Equipment"]: "321",
		["Fuel"]: "746",
		["Total"]: "1.067",
		["Plan"]: "1.067",
		["Actual"]: "1.067",
		["Deviation"]: "1.067",
	},
];

export default function Wet() {
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const columns: ColumnDef<IProps>[] = [
		{
			accessorKey: "Activity",
			cell: (info) => info.getValue(),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "Production",
			cell: (info) => info.getValue(),
			footer: (props) => props.column.id,
		},
		{
			header: `Cost USD`,
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Equipment",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
				{
					accessorFn: (row) => row.Fuel,
					id: "Fuel",
					cell: (info) => <TextTable>{info.getValue()}</TextTable>,
					header: () => <TextTable>Fuel</TextTable>,
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Total",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
			],
		},
		{
			header: "Cost USD/bcm",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Plan",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
				{
					accessorFn: (row) => row.Actual,
					id: "Actual",
					cell: (info) => info.getValue(),
					header: () => <span>Actual</span>,
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Deviation",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
			],
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
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Operation Wet Cost</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Activity"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
			</TopFilter>
			<Wrapper>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} tableTdStyles={{ padding: 0 }} />
			</Wrapper>
		</>
	);
}
