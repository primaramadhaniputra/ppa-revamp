import { Card, Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { FileContainer, ThItemContainer } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
  return {
    ["Date"]: "HD787",
    ["NRP"]: "Hd123",
    ["Name"]: `331`,
    ["Dept"]: "2022-17-08",
    ["Posisi"]: "2022-17-08",
    ["Roster"]: "2022-17-08 02:12:12",
    ['Start']: "2022-17-08 02:12:12",
    ['Finish']: "2022-17-08 02:12:12",
    ['Tugas']: "2022-17-08 02:12:12",
  }
})


export default function SuratPerintahLembur() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);


  const columns: ColumnDef<Person>[] = objTitle.map(item => {
    return {
      accessorKey: item,
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            {item}
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      )
    }
  })
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

  return (
    <Card style={{ marginTop: '30px' }}>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form / Surat Perintah Lembur</Text>
        <FileContainer>
          <div>
            <label htmlFor="file">+</label>
            <label htmlFor="file">Input</label>
          </div>
          <input type='file' id="file" hidden />
        </FileContainer>
      </Grid>
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2 table={table} />
    </Card>
  );
}
