import { flexRender, Table } from "@tanstack/react-table";
import React from "react";
import { Table as T } from "./Styles";
import TableHead from "./TableHead";

interface IProps {
	table: Table<any>;
}

export default function TableComp({ table }: IProps) {
	return (
		<T>
			<TableHead table={table} />
			<tbody>
				{table.getRowModel().rows.map((row) => {
					return (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => {
								return (
									<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</T>
	);
}
