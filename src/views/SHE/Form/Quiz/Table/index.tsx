import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import SecondFilter from "./SecondFilter";
import { ButtonContainer, TableTitle, Wrapper, WrapperInput } from "./styles";
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
import { IcEdit } from "atoms/Icon";
import StyledButton from "atoms/StyledButton";
import { colors } from "utils/styles";
import RevisiInputYoutube from "atoms/RevisiInputYoutube";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		["Dept"]: `33${index}`,
		["Kode Unit"]: `33${index}`,
		Shift: "2022-17-08",
		Date: "123",
		Status: "123",
		["Atasan Status"]: "123",
		["Detail"]: "123",
	};
});

export default function Table() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Detail" ? (
							<Grid container justifyContent="center">
								<IcEdit width={18} cursor="pointer" strokeWidth={2} color={colors.blue} />
							</Grid>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index}>
						{data.header.id === "Detail" ? (
							<span>{item}</span>
						) : (
							<>
								<span>{item}</span>
								<CompleteArrow />
							</>
						)}
					</ThItemContainer>
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
			<TableTitle variant="h4">Form Create Subject Quiz</TableTitle>
			<WrapperInput>
				<Grid style={{ flex: 1 }}>
					<RevisiInputYoutube />
				</Grid>
				<ButtonContainer>
					<StyledButton
						style={{
							padding: "4px 0",
							minWidth: "150px",
							fontSize: "15px",
							fontWeight: "bold",
							backgroundColor: colors.orange,
							color: "white",
							borderRadius: "2px",
						}}
					>
						Add
					</StyledButton>
				</ButtonContainer>
			</WrapperInput>
			<SecondFilter
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<TableComponent2 table={table} />
		</Wrapper>
	);
}
