import React, { ReactNode } from "react";
import { Column, flexRender, Table } from "@tanstack/react-table";
import LabeledInput from "atoms/LabeledInput";
import { TABLE, ThItemContainer, Wrapper } from "./styles";

interface IProps {
	withFooter?: boolean;
	tableTdStyles?: React.CSSProperties;
	[x: string]: any;
}

export default function TableComp({ table, withFooter, tableTdStyles }: IProps) {
	const Filter = ({
		column,
	}: {
		column: Column<any>;
		table: Table<any>;
		title: Element | ReactNode;
	}) => {
		return (
			<LabeledInput
				name="asdf"
				style={{ minWidth: "100px", margin: "20px 5px" }}
				title={""}
				type="text"
				value={(column.getFilterValue() ?? "") as string}
				onChange={(e) => column.setFilterValue(e.target.value)}
				placeholder={`Search...`}
			/>
		);
	};

	return (
		<Wrapper>
			<TABLE className="paleBlueRows">
				<thead>
					{table
						.getHeaderGroups()
						.map((headerGroup: { id: React.Key | null | undefined; headers: any[] }) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<>
											{header.isPlaceholder ? (
												<th key={header.id} rowSpan={2} colSpan={header.colSpan}>
													<ThItemContainer
														{...{
															className: header.column.getCanSort()
																? "cursor-pointer select-none"
																: "",
															onClick: header.column.getToggleSortingHandler(),
														}}
													>
														{flexRender(header.column.columnDef.header, header.getContext())}
														{{
															asc: " 🔼",
															desc: " 🔽",
														}[header.column.getIsSorted() as string] ?? null}
													</ThItemContainer>
												</th>
											) : (
												<th
													key={header.id}
													rowSpan={1}
													colSpan={header.colSpan}
													style={{
														display: header.depth === 2 && !header.column.parent?.id ? "none" : "",
													}}
												>
													<ThItemContainer
														{...{
															className: header.column.getCanSort()
																? "cursor-pointer select-none"
																: "",
															onClick: header.column.getToggleSortingHandler(),
														}}
													>
														{flexRender(header.column.columnDef.header, header.getContext())}
														{{
															asc: " 🔼",
															desc: " 🔽",
														}[header.column.getIsSorted() as string] ?? null}
													</ThItemContainer>
												</th>
											)}
										</>
									);
								})}
							</tr>
						))}
				</thead>
				<tbody>
					{table
						.getRowModel()
						.rows.map((row: { id: React.Key | null | undefined; getVisibleCells: () => any[] }) => {
							return (
								<tr key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id} style={{ ...tableTdStyles }}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							);
						})}
				</tbody>
				{withFooter && (
					<tfoot>
						{table
							.getHeaderGroups()
							.map((headerGroup: { id: React.Key | null | undefined; headers: any[] }) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										const title = flexRender(header.column.columnDef.header, header.getContext());
										return (
											header.column.getCanFilter() && (
												<th key={header.id} colSpan={header.colSpan}>
													{header.isPlaceholder ? null : (
														<div
															style={{
																display: "flex",
																justifyContent: "center",
															}}
														>
															<div style={{ display: "none" }}>
																{" "}
																{flexRender(header.column.columnDef.header, header.getContext())}
															</div>
															{header.column.getCanFilter() ? (
																<div>
																	<Filter column={header.column} table={table} title={title} />
																</div>
															) : null}
														</div>
													)}
												</th>
											)
										);
									})}
								</tr>
							))}
					</tfoot>
				)}
			</TABLE>
		</Wrapper>
	);
}
