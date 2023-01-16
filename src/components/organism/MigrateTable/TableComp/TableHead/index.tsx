import { flexRender, Table } from "@tanstack/react-table";
import { IcBarsArrowDown, IcBarsArrowUp, IcCursorArrow } from "atoms/Icon";
import React from "react";
import Filter from "../../Filter";
import { Container, TH, THead, TR } from "./styles";

interface IProps {
	table: Table<any>;
}

const TableHeade = ({ table }: IProps) => {
	return (
		<THead>
			{table.getHeaderGroups().map((headerGroup) => (
				<TR key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						return (
							<TH key={header.id} colSpan={header.colSpan}>
								{header.isPlaceholder ? null : (
									<>
										<Container
											{...{
												// className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
												onClick: header.column.getToggleSortingHandler(),
											}}
										>
											{flexRender(header.column.columnDef.header, header.getContext())}
											{{
												asc: <IcBarsArrowDown width={24} />,
												desc: <IcBarsArrowUp width={24} />,
											}[header.column.getIsSorted() as string] ?? <IcCursorArrow width={24} />}
										</Container>
										{header.column.getCanFilter() ? (
											<Filter column={header.column} table={table} />
										) : null}
									</>
								)}
							</TH>
						);
					})}
				</TR>
			))}
		</THead>
	);
};

export default TableHeade;
