import { Grid, Text } from "@hudoro/neron";
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
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, WrapperTable } from "../../../../styles";
import StyledButton from "atoms/StyledButton";
import UpdatePkwt from "./UpdatePkwt";
import NewHiring from "./NewHiring";
import LeadTimePenilaian from "./LeadtimePenilaian";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "",
		["Nama"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Status"]: "",
		["Kontrak 1 awal"]: "",
		["Kontrak 1 berakhir"]: "",
		["Kontrak 2 awal"]: "",
		["Kontrak 2 berakhir"]: "",
		["Kontrak 3 awal"]: "",
		["Kontrak 3 berakhir"]: "",
		["Permanen"]: "",
	};
});

export default function TableMasaPkwtKaryawan() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [isShowUpdatePkwt, setIsShowUpdatePkwt] = React.useState(false);
	const [formUpdatePkwtPosition, setFormUpdatePkwtPosition] = React.useState(0);

	const handleShowUpdatePkwt = (target: { pageY: number; clientY: number }) => {
		setIsShowUpdatePkwt(true);
		setFormUpdatePkwtPosition(target.pageY - target.clientY);
	};

	const [isShowNewHiring, setIsShowNewHiring] = React.useState(false);
	const [formNewHiringPosition, setFormNewHiringPosition] = React.useState(0);

	const handleShowNewHiring = (target: { pageY: number; clientY: number }) => {
		setIsShowNewHiring(true);
		setFormNewHiringPosition(target.pageY - target.clientY);
	};
	const [isShowLeadTimePenilaian, setIsShowLeadTimePenilaian] = React.useState(false);
	const [formLeadTimePenilaianPosition, setFormLeadTimePenilaianPosition] = React.useState(0);

	const handleShowLeadTimePenilaian = (target: { pageY: number; clientY: number }) => {
		setIsShowLeadTimePenilaian(true);
		setFormLeadTimePenilaianPosition(target.pageY - target.clientY);
	};

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

	return (
		<>
			<UpdatePkwt
				isShowUpdatePkwt={isShowUpdatePkwt}
				setIsShowUpdatePkwt={setIsShowUpdatePkwt}
				formUpdatePkwtPosition={formUpdatePkwtPosition}
			/>
			<NewHiring
				isShowNewHiring={isShowNewHiring}
				setIsShowNewHiring={setIsShowNewHiring}
				formNewHiringPosition={formNewHiringPosition}
			/>
			<LeadTimePenilaian
				isShowLeadTimePenilaian={isShowLeadTimePenilaian}
				setIsShowLeadTimePenilaian={setIsShowLeadTimePenilaian}
				formLeadTimePenilaianPosition={formLeadTimePenilaianPosition}
			/>
			<WrapperTable>
				<Text variant="h4" style={{ marginBottom: "20px", textAlign: "center", fontWeight: 500 }}>
					DAFTAR MASA PKWT KARYAWAN
				</Text>
				<Grid container justifyContent="space-between" gap={20} style={{ marginBottom: "20px" }}>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton style={{ backgroundColor: "#001F3F" }} onClick={handleShowUpdatePkwt}>
							📝 Update Pkwt
						</StyledButton>
					</Grid>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton style={{ backgroundColor: "#D81B60" }} onClick={handleShowNewHiring}>
							✉ New Hiring
						</StyledButton>
					</Grid>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton onClick={handleShowLeadTimePenilaian}>👁 Leadtime Penilaian</StyledButton>
					</Grid>
				</Grid>
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
		</>
	);
}
