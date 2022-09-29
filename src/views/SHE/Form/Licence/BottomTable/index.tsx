import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
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
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["TGL.INPUT"]: "31-08-2022",
		["NRP"]: "0123955",
		["GOL.DARAH"]: "O",
		["NAMA"]: "MISTIADI",
		["DEPT"]: "HCG",
		["POSISI"]: "DRIVER LV",
		["PERUSAHAAN"]: "SPA",
	};
});

export default function BottomTable() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <>{info.getValue()}</>;
			},
			header: () => {
				return (
					<ThItemContainer key={index} style={{ gap: "10px" }}>
						<span>{item}</span>
						<CompleteArrow />
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
		<>
			<Grid style={{ maxWidth: "80px" }}>
				<StyledButton
					style={{
						backgroundColor: colors.primary,
						color: colors.white,
						padding: "0 5px",
						fontWeight: fontWeights.bold,
						borderRadius: "15px",
						fontSize: fontSizing.md.fontSize,
					}}
				>
					+ Data
				</StyledButton>
			</Grid>
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={true}
				buttonTitle="EXPORT"
			/>
			<TableComponent2 table={table} withFooter={true} />
		</>
	);
}
