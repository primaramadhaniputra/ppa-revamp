import React from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import { ArrowDown, ArrowUp } from "../styles";
import { THContainer, Wrapper } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    ID: "HD787",
    User: "Hd123",
    Host: `33${index}`,
    DB: "2022-17-08",
    Command: "2022-17-08",
    Time: "2022-17-08 02:12:12",
    State: "2022-17-08 02:12:12",
    Info: "2022-17-08 02:12:12",
    Action: "2022-17-08 02:12:12",
  };
});

export default function Database() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "ID",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            ID
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.User,
      id: "User",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            User
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Host",
      header: () => (
        <THContainer>
          <span>
            Host
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "DB",
      header: () => (
        <THContainer>
          <span>
            DB
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Command",
      header: () => (
        <THContainer>
          <span>
            Command
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Time",
      header: () => (
        <THContainer>
          <span>
            Time(min)
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "State",
      header: () => (
        <THContainer>
          <span>
            State
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: false,
    },
    {
      accessorKey: "Info",
      header: () => (
        <THContainer>
          <span>
            Info
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: false,
    },
    {
      accessorKey: "Action",
      header: () => (
        <THContainer>
          <span>
            Action
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
    <Wrapper>
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2
        table={table}
      />
    </Wrapper>
  );
}
