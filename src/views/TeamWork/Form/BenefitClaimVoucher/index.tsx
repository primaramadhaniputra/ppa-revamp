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
import { IcImage } from "atoms/Icon";
import FormImage from "./FormImage";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { THContainer } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";
import { colors } from "utils/styles";
import ShowDetail from "./ShowDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Grid } from "@hudoro/neron";
import ButtonFile from "atoms/ButtonFile";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["Perusahaan"]: "-",
		["Approver"]: "-",
		["Status item"]: `-`,
		["Tgl.Claim"]: "-",
		["Tgl.Kwitansi"]: "-",
		["No.Claim"]: "-",
		["No.Item"]: "-",
		["Employee"]: "-",
		["Jabatan"]: "-",
		["Dept"]: "-",
		["Nama Pasien"]: "-",
		["Kode hub"]: "-",
		["Kode Klaim"]: "-",
		["Jumlah(RP.)"]: "-",
		["File"]: "-",
		["Vendor"]: "-",
		["Modified Date"]: "-",
		["Transferred Date"]: "-",
	},
];

export default function BenefitClaimVoucher() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isImage, setIsImage] = React.useState(false);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleImage = () => {
		setIsImage(!isImage);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "File" ? (
					<IcImage
						width={20}
						style={{ cursor: "pointer" }}
						onClick={handleImage}
						color={colors.blue}
					/>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<THContainer>
					<span>{item}</span>
					<CompleteArrow />
				</THContainer>
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
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			{isImage && <FormImage onclick={handleImage} />}
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Benefit Claim Voucher(BCV)</TitleText>
					<ButtonFile title={"Add Claim"} onClick={handleShowDetail as any} />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</LayoutTable>
		</>
	);
}
