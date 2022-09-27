import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { ThItemContainer } from "./styles";
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
import FlyingForm from "molecules/FlyingForm";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import { FileContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["NRP"]: "HD787",
		["Name"]: "Hd123",
		["Jabatan"]: `331`,
		["Posisi"]: "2022-17-08",
		["Action"]: "2022-17-08",
	};
});

export default function EmployeeMutation() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isEdit, setIsEdit] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleEdit = async (target: { pageY: number; clientY: number }) => {
		setIsEdit(true);
		setformPosition(target.pageY - target.clientY);
	};

	const closeEdit = () => {
		setIsEdit(false);
		setformPosition(0);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "Action" ? (
					<Grid>
						<IcEdit
							width={20}
							style={{ cursor: "pointer" }}
							onClick={(target) => handleEdit(target)}
						/>
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<ThItemContainer>
					<span>{item}</span>
					<Grid container flexDirection="column">
						<ArrowUp></ArrowUp>
						<AD></AD>
					</Grid>
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

	isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any);
	return (
		<Wrapper>
			<FlyingForm closeForm={closeEdit} isEdit={isEdit} top={formPosition} />
			<WrapperTitle>
				<TitleText>Employee Mutation</TitleText>
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
