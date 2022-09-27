import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { THContainer } from "./styles";
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
import { FileContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Date: "HD787",
		Filename: "Hd123",
		MP: `33`,
		Day: "2022-17-08",
		Status: "2022-17-08",
		Remark: "2022-17-08 02:12:12",
	},
];

export default function UploadRoster() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: (info) => {
				return (
					<THContainer key={index}>
						<Grid>
							<span>{item}</span>
						</Grid>
						{info.header.id !== "remark" && (
							<Grid container flexDirection="column">
								<ArrowUp></ArrowUp>
								<AD></AD>
							</Grid>
						)}
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
		<Wrapper>
			<WrapperTitle>
				<TitleText>Upload Roster</TitleText>
				<FileContainer>
					<label htmlFor="file"> +</label>
					<label htmlFor="file"> UPLOAD FILE</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</WrapperTitle>
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
	);
}
