import { Grid, Text } from "@hudoro/neron";
import React, { useState } from "react";
import { fontWeights } from "utils/styles";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { ThItemContainer, Wrapper } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "molecules/FlyingForm";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";
import TopFilter from "./TopFilter";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Html } from 'next/document'
// import useWindowDimensions from "utils/functions";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    nrp: "HD787",
    name: "Hd123",
    date: `33${index}`,
    code: "2022-17-08",
    in: "2022-17-08",
    out: "2022-17-08 02:12:12",
    job: "2022-17-08 02:12:12",
    pos: "2022-17-08 02:12:12",
    act: "2022-17-08 02:12:12",
  };
});

export default function UpdateRoster() {

  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => {
    setIsEdit(true)
  }
  const closeEdit = () => {
    setIsEdit(false)
  }
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "nrp",
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            nrp
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
      accessorFn: (row) => row.name,
      id: "name",
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer >
          <span>
            Name
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
      accessorKey: "date",
      header: () => (
        <ThItemContainer >
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
      accessorKey: "Code",
      header: () => (
        <ThItemContainer >
          <span>
            code
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
      accessorKey: "in",
      header: () => (
        <ThItemContainer >
          <span>
            In
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
      accessorKey: "out",
      header: () => (
        <ThItemContainer>
          <span>
            Out
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
      accessorKey: "job",
      header: () => (
        <ThItemContainer>
          <span>
            Job
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
      accessorKey: "pos",
      header: () => (
        <ThItemContainer>
          <span>
            Pos
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
      accessorKey: "act",
      header: () => (
        <ThItemContainer>
          <span>
            Act
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <AD></AD>
          </Grid>
        </ThItemContainer>
      ),
      footer: (props) => props.column.id,
      cell: () => <Grid>
        <IcEdit width={20} style={{ cursor: 'pointer' }} onClick={handleEdit} />
      </Grid>
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
  isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any)
  // const { height } = useWindowDimensions();
  // console.log(height)
  return (
    <Wrapper>
      <FlyingForm closeForm={closeEdit} isEdit={isEdit} />
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: '22px' }} >Teamwork / Form / Update Roster</Text>
      </Grid>
      <TopFilter />
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2 table={table} />
    </Wrapper>
  );
}
