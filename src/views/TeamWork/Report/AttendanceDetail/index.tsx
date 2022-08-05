import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowDown, ArrowUp, ThItemContainer, TitleText, Wrapper, WrapperTable, WrapperTitle } from "./styles";
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
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

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
          <Grid>
            <span>
              {item}
            </span>
          </Grid>
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
      <WrapperTitle>
        <TitleText>Attendance Detail</TitleText>
      </WrapperTitle>
      <WrapperTable>
        <TopFilter />
        <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={true} buttonTitle='EXPORT' />
        <TableComponent2
          table={table}
        />
      </WrapperTable>
    </Wrapper >
  );
}
