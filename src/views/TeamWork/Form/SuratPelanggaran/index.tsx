import { Grid, Icon } from "@hudoro/neron";
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
import Tabs from "./Tabs";
import IcPrinter from "atoms/Icon/IcPrinter";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
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

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["No"]: "HD787",
		["Date"]: "Hd123",
		["NRP"]: `331`,
		["Name"]: "2022-17-08",
		["Posisi"]: "2022-17-08",
		["Jenis"]: "2022-17-08 02:12:12",
		["Tempat"]: "2022-17-08 02:12:12",
		["Action"]: "2022-17-08 02:12:12",
	};
});

export default function SuratPelanggaran() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeTab, setActiveTab] = React.useState(0);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleHideDetail = () => {
		setIsShowDetail(false);
		setformPosition(0);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "Action" ? (
					<Grid container justifyContent="center" gap={30}>
						<IcPrinter width={24} style={{ cursor: "pointer" }} />
						<Icon
							iconName="IcEye"
							size={24}
							style={{ cursor: "pointer" }}
							onClick={handleShowDetail}
						/>
					</Grid>
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

	isShowDetail
		? disableBodyScroll(Html as unknown as HTMLElement | Element)
		: enableBodyScroll(Html as unknown as HTMLElement | Element);

	return (
		<Wrapper>
			<ShowDetail
				onclick={handleHideDetail}
				styles={{
					zIndex: `${isShowDetail ? "999" : "-999"}`,
					opacity: `${isShowDetail ? "1" : "0"}`,
				}}
				top={formPosition}
			/>
			<WrapperTitle style={{ marginBottom: "20px " }}>
				<Grid>
					<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
				</Grid>
			</WrapperTitle>
			<WrapperTitle>
				<TitleText> Data Pelanggaran Aktif Karyawan</TitleText>
				<FileContainer>
					<label htmlFor="file">+</label>
					<label htmlFor="file">Input</label>
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
