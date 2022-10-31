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
import {
	FileContainer,
	THContainer,
	TitleText,
	Wrapper,
	WrapperTable,
	WrapperTitle,
} from "../styles";
import CompleteArrow from "atoms/CompleteArrow";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		NRP: "-",
		Name: "-",
		Date: `-`,
		In: "-",
		Out: "-",
		Status: "-",
		["Revision Date"]: "-",
	},
];

export default function AttendanceRevision() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => {
				return (
					<THContainer key={index}>
						<Grid>
							<span>{item}</span>
						</Grid>
						<CompleteArrow />
					</THContainer>
				);
			},
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
			<WrapperTitle>
				<TitleText>Attendance Revision</TitleText>
				<FileContainer>
					<label htmlFor="file">+</label>
					<label htmlFor="file">Input</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</WrapperTitle>
			<Wrapper>
				<WrapperTable>
					<TableFilterSearch
						table={table}
						handleChangeTotalShowData={handleChangeTotalShowData}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
						withButton={false}
						buttonTitle="EXPORT"
					/>
					<TableComponent2 table={table} />
				</WrapperTable>
			</Wrapper>
		</>
	);
}
