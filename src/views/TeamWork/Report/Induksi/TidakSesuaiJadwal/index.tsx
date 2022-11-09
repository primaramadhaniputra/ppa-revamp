import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import { Container, TextInfo, Wrapper } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { Grid, Text } from "@hudoro/neron";
import { fontSizing, fontWeights } from "utils/styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";
import Image from "next/image";

interface IProps {
	[x: string]: any;
}

const arr = new Array(3).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Nama: "Hd123",
		Posisi: `33${index}`,
		Dept: "2022-17-08",
		["Tanggal Induksi"]: "2022-17-08",
	};
});

export default function TidakSesuaiJadwal() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
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
		<Wrapper>
			<Container>
				<Grid container gap={10} alignItems="center">
					<Image
						width={35}
						height={35}
						quality={100}
						alt="logo"
						src={"http://ppa-mhu.net/assets/img/induksi/induksi_tdk_sesuai_jdwl.png"}
					/>

					<Text
						variant="h4"
						style={{
							fontWeight: fontWeights.bold,
							display: "flex",
							alignItems: "center",
							fontSize: fontSizing.xl.fontSize,
							color: "#4F5458",
						}}
					>
						Tidak sesuai jadwal
					</Text>
				</Grid>
				<TextInfo>24 orang</TextInfo>
			</Container>
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={true}
				buttonTitle="EXPORT XLS"
			/>
			<TableComponent2 table={table} />
		</Wrapper>
	);
}
