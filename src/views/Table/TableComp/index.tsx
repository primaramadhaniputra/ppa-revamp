import React, { ReactNode } from "react";
import { TABLE, Wrapper } from "./styles";

import { Column, flexRender, Table } from "@tanstack/react-table";
import LabeledInput from "atoms/LabeledInput";

interface IProps {
  [x: string]: any;
}

export default function TableComp({ table }: IProps) {
  return (
    <Wrapper>
      <TABLE className="paleBlueRows">
        <thead>
          {table
            .getHeaderGroups()
            .map(
              (headerGroup: {
                id: React.Key | null | undefined;
                headers: any[];
              }) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              )
            )}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.map(
              (row: {
                id: React.Key | null | undefined;
                getVisibleCells: () => any[];
              }) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              )
            )}
        </tbody>
        <tfoot>
          {table
            .getHeaderGroups()
            .map(
              (headerGroup: {
                id: React.Key | null | undefined;
                headers: any[];
              }) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const title = flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    );
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
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </div>
                              {header.column.getCanFilter() ? (
                                <div>
                                  <Filter
                                    column={header.column}
                                    table={table}
                                    title={title}
                                  />
                                </div>
                              ) : null}
                            </div>
                          )}
                        </th>
                      )
                    );
                  })}
                </tr>
              )
            )}
        </tfoot>
      </TABLE>
    </Wrapper>
  );
}

function Filter({
  column,
  title,
}: {
  column: Column<any>;
  table: Table<any>;
  title: Element | ReactNode;
}) {
  // table,
  // const firstValue = table
  //    .getPreFilteredRowModel()
  //    .flatRows[0]?.getValue(column.id)

  return (
    <LabeledInput
      name="asdf"
      style={{ width: "150px" }}
      title={title as string}
      type="text"
      value={(column.getFilterValue() ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
    />
  );
}
