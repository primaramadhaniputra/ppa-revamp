import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { ThItemContainer, TitleText, Wrapper, WrapperTable } from "./styles";
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
import TopFilter from "./TopFilter";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Html } from 'next/document'
import { WrapperTitle } from "../AttendanceRevision/styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

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
          <Grid>
            <span>
              NRP
            </span>
          </Grid>
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
          <Grid>
            <span>
              Name
            </span>
          </Grid>
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
          <Grid>
            <span>
              Date
            </span>
          </Grid>
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
          <Grid>
            <span>
              Code
            </span>
          </Grid>
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
          <Grid>
            <span>
              In
            </span>
          </Grid>
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
          <Grid>
            <span>
              Out
            </span>
          </Grid>
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
          <Grid>
            <span>
              Job
            </span>
          </Grid>
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
          <Grid>
            <span>
              Pos
            </span>
          </Grid>
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
  return (
    <Wrapper>
      <FlyingForm closeForm={closeEdit} isEdit={isEdit} top={window.pageYOffset} />
      <WrapperTitle>
        <TitleText>Update Roster</TitleText>
      </WrapperTitle>
      <WrapperTable>
        <TopFilter />
        <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={false} buttonTitle='EXPORT' />
        <TableComponent2 table={table} />
      </WrapperTable>
    </Wrapper>
  );
}
