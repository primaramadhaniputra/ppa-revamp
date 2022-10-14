import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React from "react";
// import {
// 	ColumnDef,
// 	getCoreRowModel,
// 	getFilteredRowModel,
// 	getPaginationRowModel,
// 	useReactTable,
// 	SortingState,
// 	getSortedRowModel,
// } from "@tanstack/react-table";
import TopFilter from "./TopFilter";
// import TableComponent2 from "src/components/organism/TableComp2";
// import TableFilterSearch from "src/components/organism/TableFilterSearch";
// import CompleteArrow from "atoms/CompleteArrow";
import {
	// ThItemContainer,
	TitleText,
	Wrapper,
	WrapperTable,
	WrapperTitle,
} from "../../../../styles";
import Chart from "./Chart";
// import DataDetail from "./DataDetail";

// interface IProps {
// 	[x: string]: any;
// }

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "E52015",
		["Fuel Consumption Rate L/H"]: "127.2",
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

export default function AllCode() {
	// const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	// const [rowSelection, setRowSelection] = React.useState({});
	// const [globalFilter, setGlobalFilter] = React.useState("");
	// const [globalFilter] = React.useState("");
	// const [sorting, setSorting] = React.useState<SortingState>([]);
	const [showChart, setShowChart] = React.useState(false);
	// const [isShowDetail, setIsShowDetail] = React.useState(false);
	// const [formPosition, setformPosition] = React.useState(0);

	// const handleShowDetail = (target: { pageY: number; clientY: number }) => {
	// 	setIsShowDetail(true);
	// 	setformPosition(target.pageY - target.clientY);
	// };

	// const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
	// 	return {
	// 		accessorKey: item,
	// 		cell: (info) => {
	// 			return info.column.id === "CN" ? (
	// 				<span style={{ color: "blue", cursor: "pointer" }} onClick={handleShowDetail}>
	// 					{info.getValue()}
	// 				</span>
	// 			) : (
	// 				info.getValue()
	// 			);
	// 		},
	// 		header: () => (
	// 			<ThItemContainer key={index} style={{ minWidth: "100px" }}>
	// 				<Grid>
	// 					<span>{item}</span>
	// 				</Grid>
	// 				<CompleteArrow />
	// 			</ThItemContainer>
	// 		),
	// 	};
	// });
	// const table = useReactTable({
	// 	data: defaultDataTable,
	// 	columns,
	// 	state: {
	// 		sorting,
	// 		rowSelection,
	// 		globalFilter,
	// 	},
	// 	onSortingChange: setSorting,
	// 	onRowSelectionChange: setRowSelection,
	// 	getCoreRowModel: getCoreRowModel(),
	// 	getFilteredRowModel: getFilteredRowModel(),
	// 	getPaginationRowModel: getPaginationRowModel(),
	// 	debugTable: true,
	// 	getSortedRowModel: getSortedRowModel(),
	// });

	// const handleChangeTotalShowData = (e: { target: { value: number } }) => {
	// 	table.setPageSize(e.target.value);
	// };

	const handleShowChart = (value: ISelectItem | ISelectItem[] | null) => {
		if (value?.values === "Table") {
			setShowChart(false);
		} else {
			setShowChart(true);
		}
	};

	return (
		<>
			{/* <DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/> */}
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>All Code</TitleText>
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
				<Wrapper>
					<Chart />
				</Wrapper>
			) : (
				<Wrapper>
					<WrapperTable>
						<TopFilter />
						{/* <TableFilterSearch
							table={table}
							handleChangeTotalShowData={handleChangeTotalShowData}
							globalFilter={globalFilter}
							setGlobalFilter={setGlobalFilter}
							withButton={true}
							buttonTitle="EXPORT"
						/>
						<TableComponent2 table={table} /> */}
					</WrapperTable>
				</Wrapper>
			)}
		</>
	);
}
