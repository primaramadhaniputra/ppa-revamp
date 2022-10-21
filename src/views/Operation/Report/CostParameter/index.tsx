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
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, TitleText, Wrapper, WrapperTitle } from "../styles";
import Chart from "./Chart";
import { TextTable } from "./styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["PAYLOAD"]: "-",
		["LOAD TIME"]: "-",
		["SPEED"]: "-",
		["FUEL"]: "-",
		["UA RATIO"]: "-",
	};
});

export default function CostParameter() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);
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
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText> Cost Parameter</TitleText>
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
				<Chart />
				<TableComponent2 table={table} tableTdStyles={{ padding: 0 }} />
			</Wrapper>
		</>
	);
}
