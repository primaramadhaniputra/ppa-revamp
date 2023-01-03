import { Grid } from "@hudoro/neron";
import { flexRender, Table } from "@tanstack/react-table";
import { IcBarsArrowDown, IcBarsArrowUp, IcCursorArrow } from "atoms/Icon";
import React from "react";
import Filter from "../Filter";
import { Table as T } from "./Styles";
interface IProps {
	table: Table<any>;
}

export default function TableComp({ table }: IProps) {
	return (
		<T>
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return (
								<th key={header.id} colSpan={header.colSpan}>
									{header.isPlaceholder ? null : (
										<>
											<div
												style={{ cursor: "pointer", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
												{...{
													className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
													onClick: header.column.getToggleSortingHandler(),
												}}
											>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{
													asc: <IcBarsArrowDown width={24} />,
													desc: <IcBarsArrowUp width={24} />,
												}[header.column.getIsSorted() as string] ?? <IcCursorArrow width={24} />}
											</div>
											{header.column.getCanFilter() ? (
												<div>
													<Filter column={header.column} table={table} />
												</div>
											) : null}
										</>
									)}
								</th>
							);
						})}
					</tr>
				))}
			</thead>
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
