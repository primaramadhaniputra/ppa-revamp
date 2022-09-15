import React, { useState } from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import {
	ArrowDown,
	ArrowUp,
	TableWrapper,
	TabsContainer,
	TabText,
	ThItemContainer,
	Wrapper,
} from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import TopFilter from "./TopFilter";
import { WrapperTable } from "../../styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

const tabText = ["Operator", "Pengawas"];

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		Perusahaan: `33${index}`,
		Dept: "2022-17-08",
		Posisi: "2022-17-08",
		Checkin: "2022-17-08 02:12:12",
		P2H: "2022-17-08 02:12:12",
		Achievement: "2022-17-08 02:12:12",
	};
});

export default function Achievement() {
	const [activeTab, setActiveTab] = useState(0);
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
					<Grid container flexDirection="column">
						<ArrowUp></ArrowUp>
						<ArrowDown></ArrowDown>
					</Grid>
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
		<Wrapper>
			<TabsContainer>
				{tabText.map((item, index) => (
					<TabText
						key={index}
						activeTab={activeTab === index ? true : false}
						onClick={() => handleActiveTab(index)}
					>
						{item}
					</TabText>
				))}
			</TabsContainer>

			<TableWrapper>
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
			</TableWrapper>
		</Wrapper>
	);
}
