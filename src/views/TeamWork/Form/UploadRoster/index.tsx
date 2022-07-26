import { Grid, Text } from "@hudoro/neron";
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

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    date: "HD787",
    filename: "Hd123",
    mp: `33${index}`,
    day: "2022-17-08",
    status: "2022-17-08",
    remark: "2022-17-08 02:12:12",
  };
});

export default function UploadRoster() {

  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "date",
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Date
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.filename,
      id: "filename",
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer >
          <span>
            File Name
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "mp",
      header: () => (
        <ThItemContainer >
          <span>
            MP
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "day",
      header: () => (
        <ThItemContainer >
          <span>
            Day
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "status",
      header: () => (
        <ThItemContainer >
          <span>
            Status
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "remark",
      header: () => (
        <ThItemContainer>
          <span>
            Remark
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
    },
  ];

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
    <>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form /Upload Roster</Text>
        <FileContainer>
          <label htmlFor="file"> <span>+</span> UPLOAD FILE</label>
          <input type='file' id="file" hidden />
        </FileContainer>
      </Grid>
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2 table={table} />
    </>
  );
}
