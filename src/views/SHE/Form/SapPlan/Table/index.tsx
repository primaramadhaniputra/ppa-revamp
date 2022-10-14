import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import SecondFilter from "./SecondFilter";
import { Wrapper } from "./styles";
import TopFilter from "src/components/organism/TopFilter";
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
import FlyingForm from "./FlyingForm";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";
import RevisiDropdown from "atoms/RevisiDropdown";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Periode"]: "HD787",
		["NRP"]: "Hd123",
		["Name"]: `Dani Ganteng `,
		["Dept"]: "GL",
		["TOH"]: "1",
		["KTA"]: "1",
		["TTA"]: "1",
		["INS"]: "1",
		["OBS"]: "1",
		["PKR"]: "1",
		["WUC"]: "1",
		["Detail"]: "1",
	};
});

export default function Table() {
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

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Detail" ? (
							<Grid container justifyContent="center" onClick={(target) => handleEdit(target)}>
								<IcEdit width={18} strokeWidth={1.5} cursor="pointer" />
							</Grid>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index} style={{ width: "100%", justifyContent: "space-around" }}>
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

	const closeEdit = () => {
		setIsEdit(false);
		setformPosition(0);
	};

	isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any);

	return (
		<Wrapper>
			<FlyingForm closeForm={closeEdit} isEdit={isEdit} formPosition={formPosition} />
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Ranking" />
				</Grid>
			</TopFilter>
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
