import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { FileContainer, THContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "./styles";
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
        <THContainer>
          <Grid>
            <span>
              Date
            </span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.filename,
      id: "filename",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer >
          <Grid>
            <span>
              File Name
            </span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "mp",
      header: () => (
        <THContainer >
          <Grid>
            <span>
              MP
            </span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "day",
      header: () => (
        <THContainer >
          <Grid>
            <span>
              Day
            </span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "status",
      header: () => (
        <THContainer >
          <Grid>
            <span>
              Status
            </span>
          </Grid>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "remark",
      header: () => (
        <THContainer>
          <span>
            Remark
          </span>
        </THContainer>
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
    <Wrapper >
      <WrapperTitle>
        <TitleText>Upload Roster</TitleText>
        <FileContainer>
          <label htmlFor="file"> +</label>
          <label htmlFor="file"> UPLOAD FILE</label>
          <input type='file' id="file" hidden />
        </FileContainer>
      </WrapperTitle>
      <WrapperTable>
        <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <TableComponent2 table={table} />
      </WrapperTable>
    </Wrapper>
  );
}
