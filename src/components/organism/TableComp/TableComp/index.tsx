import React from "react";

import { flexRender } from "@tanstack/react-table";
import { TABLE, ThItemContainer, Wrapper } from "./styles";

interface IProps {
  filterBottom: boolean;
  [x: string]: any;
}

// function Filter({
//   column,
//   title,
// }: {
//   column: Column<any>;
//   table: Table<any>;
//   title: Element | ReactNode;
// }) {
//   // table,
//   // const firstValue = table
//   //    .getPreFilteredRowModel()
//   //    .flatRows[0]?.getValue(column.id)

//   return (
//     <LabeledInput
//       name="asdf"
//       style={{ width: "150px" }}
//       title={title as string}
//       type="text"
//       value={(column.getFilterValue() ?? "") as string}
//       onChange={(e) => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//     />
//   );
// }
// , filterBottom
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
                      <th key={header.id} rowSpan={1} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <ThItemContainer
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
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
                        )}
                      </th>
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
        {/* <tfoot>
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
                              {header.column.getCanFilter() && filterBottom ? (
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
        </tfoot> */}
      </TABLE>
    </Wrapper>
  );
}
