import { Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { ArrowDown, ArrowUp, ThItemContainer, Wrapper } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "./TopFilter";
import SecondFilter from "./SecondFilter";
import TableComponent2 from "src/components/organism/TableComp2";

interface IProps {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    NRP: "HD787",
    Nama: "Hd123",
    Tanggal: `33${index}`,
    In: "2022-17-08",
    Out: "2022-17-08",
    Job: "2022-17-08 02:12:12",
    Dep: "2022-17-08 02:12:12",
    Company: "2022-17-08 02:12:12",
    Code: "2022-17-08 02:12:12",
    Device: "2022-17-08 02:12:12",
    Owner: "2022-17-08 02:12:12",
  };
});

export default function AttendanceDetail() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
    return {
      accessorKey: item,
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer key={index}>
          <span>
            {item}
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    }
  });
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
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ margin: '30px 0' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Report / Attendance Detail</Text>
      </Grid>
      <TopFilter />
      <SecondFilter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2
        table={table}
      />
    </Wrapper>
  );
}
