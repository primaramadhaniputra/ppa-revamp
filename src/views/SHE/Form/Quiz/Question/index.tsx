import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import SecondFilter from "./SecondFilter";
import {
	ArrowDown,
	ArrowUp,
	IconContainer,
	IconWrapper,
	TableTitle,
	ThItemContainer,
	Wrapper,
} from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { Grid, Icon } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		ID: "HD787",
		Question: "Hd123",
		["Subject Group"]: `33${index}`,
		["Modified Date"]: `33${index}`,
		["Action"]: "123",
	};
});

export default function Question() {
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

	const deleteQuestion = async () => {
		if (confirm("Are you sure to delete this question ? ")) {
			return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
		}
		return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Action" ? (
							<IconWrapper>
								<IconContainer title="edit">
									<IcEdit
										width={20}
										cursor="pointer"
										color="white"
										strokeWidth={1.5}
										onClick={(target) => handleEdit(target)}
									/>
								</IconContainer>
								<IconContainer title="delete">
									<Icon iconName="IcClose" color="white" onClick={deleteQuestion} />
								</IconContainer>
							</IconWrapper>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index} style={{ width: "100%", justifyContent: "space-around" }}>
						{data.header.id === "Action" ? (
							<span>{item}</span>
						) : (
							<>
								<span>{item}</span>
								<Grid container flexDirection="column">
									<ArrowUp></ArrowUp>
									<ArrowDown></ArrowDown>
								</Grid>
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
		<>
			<FlyingForm closeForm={closeEdit} isEdit={isEdit} formPosition={formPosition} />
			<Wrapper>
				<TableTitle variant="h4">Data List Question Quiz</TableTitle>
				<SecondFilter
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
				<TableComponent2 table={table} />
			</Wrapper>
		</>
	);
}
