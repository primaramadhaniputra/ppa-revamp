import { Grid, Text } from "@hudoro/neron";
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
import { IcImage } from "atoms/Icon";
import FormImage from "./FormImage";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
  return {
    ["Perusahaan"]: "HD787",
    ["Approver"]: "Hd123",
    ["Status item"]: `331`,
    ["Tgl.Claim"]: "2022-17-08",
    ["Tgl.Kwitansi"]: "2022-17-08",
    ["No.Claim"]: "2022-17-08 02:12:12",
    ['No.Item']: "2022-17-08 02:12:12",
    ['Employee']: "2022-17-08 02:12:12",
    ['Jabatan']: "2022-17-08 02:12:12",
    ['Dept']: "2022-17-08 02:12:12",
    ['Nama Pasien']: "2022-17-08 02:12:12",
    ['Kode hub']: "2022-17-08 02:12:12",
    ['Kode Klaim']: "2022-17-08 02:12:12",
    ['Jumlah(RP.)']: "2022-17-08 02:12:12",
    ['File']: "",
    ['Vendor']: "",
    ['Modified Date']: "",
    ['Transferred Date']: "",
  }
})


export default function BenefitClaimVoucher() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isImage, setIsImage] = React.useState(false)

  const handleImage = () => {
    setIsImage(!isImage)
  }

  const columns: ColumnDef<Person>[] = objTitle.map(item => {
    return {
      accessorKey: item,
      cell: (info) => {
        return item === "File" ? <IcImage width={20} style={{ cursor: 'pointer' }} onClick={handleImage} /> : info.getValue()
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
    <>
      {isImage && <FormImage onclick={handleImage} />}
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form / Benefit Claim Voucher</Text>
        <FileContainer>
          <div>
            <label htmlFor="file">+</label>
            <label htmlFor="file">UPLOAD FILE</label>
          </div>
          <input type='file' id="file" hidden />
        </FileContainer>
      </Grid>
      <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableComponent2
        table={table}
      />
    </>
  );
}