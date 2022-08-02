import { Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { FileContainer, ThItemContainer, Wrapper } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import Tabs from "./Tabs";
import IcPrinter from "atoms/Icon/IcPrinter";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
  return {
    ["No"]: "HD787",
    ["Date"]: "Hd123",
    ["NRP"]: `331`,
    ["Name"]: "2022-17-08",
    ["Posisi"]: "2022-17-08",
    ["Jenis"]: "2022-17-08 02:12:12",
    ['Tempat']: "2022-17-08 02:12:12",
    ['Action']: "2022-17-08 02:12:12",
  }
})


export default function SuratPelanggaran() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [activeTab, setActiveTab] = React.useState(0)
  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const handleShowDetail = () => {
    setIsShowDetail(true)
  }

  const columns: ColumnDef<Person>[] = objTitle.map(item => {
    return {
      accessorKey: item,
      cell: (info) => {
        return item === 'Action' ? <Grid container justifyContent="center" gap={30}>
          <IcPrinter width={24} style={{ cursor: 'pointer' }} />
          <Icon iconName="IcEye" size={24} style={{ cursor: 'pointer' }} onClick={handleShowDetail} />
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
    <Wrapper>
      {isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: '22px' }} >Teamwork / Form / Data Pelanggaran Aktif Karyawan</Text>
      </Grid>
      <Grid container style={{ marginTop: '30px' }} alignItems="center" gap={10}>
        <Grid>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Grid>
        <FileContainer >
          <label htmlFor="file">+</label>
          <label htmlFor="file">Input</label>
          <input type='file' id="file" hidden />
        </FileContainer>
      </Grid>
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2 table={table} />
    </Wrapper>
  );
}
