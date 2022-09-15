import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import { fontWeights } from "utils/styles";
import TopFilter from "../TopFilter";

import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  // SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { ThItemContainer } from "../styles";
import { ArrowDown, ArrowUp } from "../Department/Detail/styles";
import { TextYear } from "../TopFilter/styles";

interface Person {
  [x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
  return {
    Bulan: "Januari 2021",
    D: `12`,
    N: `12`,
    IO: "12",
    C: "12",
    O: "12",
    T: "12",
    P: "12",
    S: "12",
    I: "12",
    A: "12",
    K: "12",
    ["ATR MTD"]: "100%",
  };
});

export default function YTD() {
  const [rowSelection, setRowSelection] = React.useState({});
  const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
  const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
    return {
      accessorKey: item,
      cell: (info) => {
        return (
          <span
            style={{
              fontWeight:
                info.column.id === "Bulan" || info.column.id === "ATR MTD"
                  ? fontWeights.bold
                  : fontWeights.regular,
            }}
          >
            {info.getValue()}
          </span>
        );
      },
      header: () => (
        <ThItemContainer key={index}>
          <Grid>
            <span>{item}</span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      ),
      footer: (info) => {
        return (
          <span
            style={{
              fontWeight: fontWeights.bold,
              fontFamily: fontFamilies.poppins,
            }}
          >
            {info.column.id === "Bulan" ? "Total" : "123"}
          </span>
        );
      },
    };
  });
  const table = useReactTable({
    data: defaultDataTable,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <>
      <Grid
        container
        gap={10}
        alignItems="center"
        justifyContent="space-between"
        style={{ margin: "15px 0", width: "100%" }}
      >
        <Text
          variant="h4"
          style={{ fontWeight: fontWeights.bold, fontSize: "15px" }}
        >
          YTD Personel
        </Text>
        <TextYear>
          Current Year <span>2021</span>
        </TextYear>
      </Grid>
      <TopFilter
        noDept={true}
        noDate={true}
        doubleSelect={true}
        styles={{ marginBottom: 40 }}
      />
      <TableComponent2 table={table} noPagination={true} withFooter={true} />
    </>
  );
}
