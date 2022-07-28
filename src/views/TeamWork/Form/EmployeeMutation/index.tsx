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
import { IcEdit } from "atoms/Icon";
import FlyingForm from "molecules/FlyingForm";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
  return {
    ["NRP"]: "HD787",
    ["Name"]: "Hd123",
    ["Jabatan"]: `331`,
    ["Posisi"]: "2022-17-08",
    ["Action"]: "2022-17-08",
  }
})


export default function EmployeeMutation() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isEdit, setIsEdit] = React.useState(false)

  const handleEdit = () => {
    setIsEdit(true)
  }
  const closeEdit = () => {
    setIsEdit(false)
  }

  const columns: ColumnDef<Person>[] = objTitle.map(item => {
    return {
      accessorKey: item,
      cell: (info) => {
        return item === 'Action' ? <Grid>
          <IcEdit width={20} style={{ cursor: 'pointer' }} onClick={handleEdit} />
        </Grid> : info.getValue()
      },
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
      <FlyingForm closeForm={closeEdit} isEdit={isEdit} />
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form / Employee Mutation</Text>
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
