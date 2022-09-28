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
		["Perusahaan"]: "HD787",
		["Approver"]: "Hd123",
		["Status item"]: `331`,
		["Tgl.Claim"]: "2022-17-08",
		["Tgl.Kwitansi"]: "2022-17-08",
		["No.Claim"]: "2022-17-08 02:12:12",
		["No.Item"]: "2022-17-08 02:12:12",
		["Employee"]: "2022-17-08 02:12:12",
		["Jabatan"]: "2022-17-08 02:12:12",
		["Dept"]: "2022-17-08 02:12:12",
		["Nama Pasien"]: "2022-17-08 02:12:12",
		["Kode hub"]: "2022-17-08 02:12:12",
		["Kode Klaim"]: "2022-17-08 02:12:12",
		["Jumlah(RP.)"]: "2022-17-08 02:12:12",
		["File"]: "",
		["Vendor"]: "",
		["Modified Date"]: "",
		["Transferred Date"]: "",
	},
];

export default function BenefitClaimVoucher() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isImage, setIsImage] = React.useState(false);

	const handleImage = () => {
		setIsImage(!isImage);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "File" ? (
					<IcImage width={20} style={{ cursor: "pointer" }} onClick={handleImage} />
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
		<Wrapper>
			{isImage && <FormImage onclick={handleImage} />}
			<WrapperTitle>
				<TitleText>Benefit Claim Voucher(BCV)</TitleText>
				<FileContainer>
					<label htmlFor="file">+</label>
					<label htmlFor="file">UPLOAD FILE</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</WrapperTitle>
			<WrapperTable>
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
		</Wrapper>
	);
}
