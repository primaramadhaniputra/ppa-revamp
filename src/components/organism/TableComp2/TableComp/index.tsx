import React from "react";
import { flexRender } from "@tanstack/react-table";
import { TABLE, ThItemContainer, Wrapper } from "./styles";

interface IProps {
  withFooter?: boolean;
  [x: string]: any;
}

export default function TableComp({ table, withFooter }: IProps) {
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
                  {headerGroup.headers.map((header) => {
                    return (
                      <>
                        {header.isPlaceholder ? (
                          <th
                            key={header.id}
                            rowSpan={2}
                            colSpan={header.colSpan}
                          >
                            <ThItemContainer
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
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
                              display:
                                header.depth === 2 && !header.column.parent?.id
                                  ? "none"
                                  : "",
                            }}
                          >
                            <ThItemContainer
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
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
        {withFooter && (
          <tfoot>
            {table
              .getFooterGroups()
              .map(
                (footerGroup: {
                  id: React.Key | null | undefined;
                  headers: any[];
                }) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                )
              )}
          </tfoot>
        )}
      </TABLE>
    </Wrapper>
  );
}
