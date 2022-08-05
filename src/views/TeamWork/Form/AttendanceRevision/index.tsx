import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { FileContainer, ThItemContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "./styles";
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
    in: "2022-17-08",
    out: "2022-17-08",
    status: "2022-17-08 02:12:12",
    ['revision date']: "2022-17-08 02:12:12",
  };
});

export default function AttendanceRevision() {

  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
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
        <ThItemContainer >
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
      accessorKey: "status",
      header: () => (
        <ThItemContainer>
          <Grid>
            <span>
              Status
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
      accessorKey: "revision date",
      header: () => (
        <ThItemContainer>
          <Grid>
            <span>
              Revision Date
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
      <WrapperTitle >
        <TitleText >Attendance Revision</TitleText>
        <FileContainer >
          <label htmlFor="file">+</label>
          <label htmlFor="file">Input</label>
          <input type='file' id="file" hidden />
        </FileContainer>
      </WrapperTitle>
      <WrapperTable>
        <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={false} buttonTitle='EXPORT' />
        <TableComponent2 table={table} />
      </WrapperTable>
    </Wrapper>
  );
}
