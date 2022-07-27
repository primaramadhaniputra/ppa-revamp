import { Card, Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { ArrowDown, ArrowUp, ThItemContainer } from "./styles";
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
import ShowDetail from "./ShowDetail";

interface IProps {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    ['Waktu Kejadian']: "2022-10-12||10.30",
    ['NRP']: "Hd123",
    ['Nama']: `33${index}`,
    ['Posisi']: "Sayap kanan",
    ['Sanksi']: "ee gak tau",
    ['Jenis']: "2022-17-08 02:12:12",
    ["Status"]: "AKTIF",
    ['Detail']: "2022-17-08 02:12:12",
  };
});

export default function SuratPelanggaran() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isShowDetail, setIsShowDetail] = React.useState(false)
  const handleShowDetail = () => {
    setIsShowDetail(true)
  }
  const columns: ColumnDef<IProps>[] = [
    {
      accessorKey: 'Waktu Kejadian',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Waktu Kejadian
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'NRP',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            NRP
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Nama',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Nama
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Posisi',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Posisi
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Sanksi',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Sanksi
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Jenis',
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            Jenis
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Status',
      cell: (info) => <span style={{ fontWeight: fontWeights.bold, color: "#3B7DDD" }}>{info.getValue()}</span>,
      header: () => (
        <ThItemContainer>
          <span>
            Status
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
    },
    {
      accessorKey: 'Detail',
      cell: () => <Grid container style={{ justifyContent: 'center', cursor: 'pointer' }}>
        <Icon iconName="IcEye" size={24} onClick={handleShowDetail} />
      </Grid>,
      header: () => (
        <ThItemContainer>
          <span>
            Detail
          </span>
          <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </ThItemContainer>
      )
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
    <>
      {isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
      <Card style={{ marginTop: '30px', paddingTop: 0, boxShadow: 'none' }}>
        <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
          <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Report / Surat Pelanggaran</Text>
        </Grid>
        <TopFilter />
        <SecondFilter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <TableComponent2
          table={table}
        />
      </Card>
    </>
  );
}
