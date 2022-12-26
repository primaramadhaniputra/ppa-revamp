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
import { THContainer } from "atoms/THContainer";
import FlyingForm from "./FlyingForm";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["TGL.Kejadian"]: "-",
		["Korban"]: "-",
		["Kategori"]: "-",
		["Kerugian"]: "-",
		["Deskripsi"]: "-",
		["File"]: "-",
	};
});

export default function BottomTable() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <>{info.getValue()}</>;
			},
			header: () => {
				return (
					<THContainer key={index} style={{ gap: "10px" }}>
						<span>{item}</span>
						<CompleteArrow />
					</THContainer>
				);
			},
			enableColumnFilter: item === "File" ? false : item === "Deskripsi" ? false : true,
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
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Grid style={{ maxWidth: "max-content" }}>
				<StyledButton
					style={{
						backgroundColor: colors.primary,
						padding: "5px",
						fontWeight: fontWeights.semi,
						fontSize: fontSizing.sm.fontSize,
					}}
					onClick={handleShowDetail}
				>
					📦 Data
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
