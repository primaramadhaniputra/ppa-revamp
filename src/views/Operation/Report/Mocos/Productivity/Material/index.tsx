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
import TopFilter from "src/components/organism/TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, TitleText, Wrapper, WrapperTitle } from "../../../styles";
import Chart from "./Chart";
import { TextTable } from "./styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["Model"]: "-",
		["Pit"]: "-",
		["Material"]: "-",
		["WH Mat"]: "-",
		["WH Tot"]: "-",
		["HM Mng"]: "-",
		["HM Prop"]: "-",
		["Distance"]: "-",
		["Production"]: "-",
		["Productivity"]: "-",
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

export default function Material() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [showChart, setShowChart] = React.useState(false);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => <TextTable>{info.getValue()}</TextTable>,
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
				<TitleText>Productivity By Material (Site MHU)</TitleText>
			</WrapperTitle>
			<Grid container alignItems="center" style={{ maxWidth: "200px", margin: "20px auto" }}>
				<Select
					placeholder="Table"
					items={items}
					defaultValue={items[0]}
					onChange={handleShowChart}
				/>
			</Grid>
			{showChart ? (
				<Wrapper>
					<Chart />
				</Wrapper>
			) : (
				<>
					<TopFilter>
						<Grid>
							<StyledDropdownMenu
								title="Activity"
								data={[1, 2]}
								activeDropdown={activeShiftDropDown}
								setActiveDropdown={setActiveShiftDropDown}
							/>
						</Grid>
						<Grid>
							<StyledDropdownMenu
								title="Model"
								data={[1, 2]}
								activeDropdown={activeShiftDropDown}
								setActiveDropdown={setActiveShiftDropDown}
							/>
						</Grid>
						<Grid>
							<StyledDropdownMenu
								title="Material"
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
			)}
		</>
	);
}
