import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import TableComponent2 from "src/components/organism/TableComp2";
import TopFilter from "./TopFilter";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { THContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";

interface Person {
	[x: string]: any;
}
export const defaultDataTable = [
	{
		NRP: "HD787",
		Name: "Hd123",
		Date: `33`,
		Code: "2022-17-08",
		In: "2022-17-08",
		Out: "2022-17-08 02:12:12",
		Job: "2022-17-08 02:12:12",
		Pos: "2022-17-08 02:12:12",
		Act: "2022-17-08 02:12:12",
	},
];

export default function UpdateRoster() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isEdit, setIsEdit] = useState(false);

	const handleEdit = () => {
		setIsEdit(true);
	};
	const closeEdit = () => {
		setIsEdit(false);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "Act" ? (
					<Grid>
						<IcEdit width={20} style={{ cursor: "pointer" }} onClick={handleEdit} />
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: (info) => {
				return (
					<THContainer key={index}>
						<Grid>
							<span>{item}</span>
						</Grid>
						{info.header.id !== "Act" && <CompleteArrow />}
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
	isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any);
	return (
		<Wrapper>
			<FlyingForm closeForm={closeEdit} isEdit={isEdit} top={window.pageYOffset} />
			<WrapperTitle>
				<TitleText>Update Roster</TitleText>
			</WrapperTitle>
			<WrapperTable>
				<TopFilter />
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
