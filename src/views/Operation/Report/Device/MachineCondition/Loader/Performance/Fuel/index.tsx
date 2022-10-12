import { Grid, ISelectItem, Select } from "@hudoro/neron";
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
import TopFilter from "./TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import {
	ThItemContainer,
	TitleText,
	Wrapper,
	WrapperTable,
	WrapperTitle,
} from "../../../../styles";

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

const items = [
	{
		id: "1",
		label: "Table",
		values: "Table",
	},
	{
		id: "2",
		label: "Chart",
		values: "Chart",
	},
];

export default function Fuel() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [showChart, setShowChart] = React.useState(false);

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

	const handleShowChart = (value: ISelectItem | ISelectItem[] | null) => {
		if (value?.values === "Table") {
			setShowChart(false);
		} else {
			setShowChart(true);
		}
	};

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Fuel Consumption Rate</TitleText>
			</WrapperTitle>
			<Grid container alignItems="center">
				<Select
					placeholder="Table"
					items={items}
					defaultValue={items[0]}
					onChange={handleShowChart}
				/>
			</Grid>
			{showChart ? (
				<h1>banana</h1>
			) : (
				<Wrapper>
					<WrapperTable>
						<TopFilter />
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
				</Wrapper>
			)}
		</>
	);
}
