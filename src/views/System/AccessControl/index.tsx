import React from "react";
import TableComponent from "src/components/organism/TableComp";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useSystemTypeValue } from "recoil/SystemType/atom";
import { IcBan, IcEdit, IcRefresh } from "atoms/Icon";
import { IconContainer, Wrapper } from "./styles";
import { Grid } from "@hudoro/neron";
import { ArrowDown, ArrowUp } from "../styles";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    NRP: "HD787",
    Name: "Hd123",
    Dept: `33${index}`,
    Position: "2022-17-08",
    Level: "2022-17-08",
    Action: "2022-17-08 02:12:12",
  };
});

export default function AccessControl() {
  const systemTypeValue = useSystemTypeValue();
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "NRP",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            NRP
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.Name,
      id: "Name",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Name
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Dept",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Dept
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Position",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Position
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Level",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Level
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Action",
      cell: () => (
        <Wrapper>
          <IconContainer>
            <IcEdit
              width={20}
              cursor="pointer"
              color="white"
              strokeWidth={1.5}
            />
          </IconContainer>
          <IconContainer>
            <IcRefresh
              width={20}
              cursor="pointer"
              color="white"
              strokeWidth={1.5}
            />
          </IconContainer>
          <IconContainer>
            <IcBan width={20} cursor="pointer" color="white" strokeWidth={2} />
          </IconContainer>
        </Wrapper>
      ),
      header: () => (
        <span>
          Action
        </span>
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

  return (
    <>
      <TableComponent
        table={table}
        type={systemTypeValue}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        filterBottom={false}
      />
    </>
  );
}
