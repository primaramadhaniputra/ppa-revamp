import { Grid, Icon } from "@hudoro/neron";
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
import SecondFilter from "./SecondFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import ShowDetail from "./ShowDetail";

interface IProps {
  [x: string]: any;
}

const arr = new Array(3).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    NRP: "HD787",
    Nama: "Hd123",
    Posisi: `33${index}`,
    Status: "2022-17-08",
    Out: "2022-17-08",
    Dept: "2022-17-08 02:12:12",
    ['Jenis Izin']: "2022-17-08 02:12:12",
    Berangkat: "2022-17-08 02:12:12",
    Kembali: "2022-17-08 02:12:12",
    ['Total Izin']: "2022-17-08 02:12:12",
    Approval: "2022-17-08 02:12:12",
    Detail: "",
  };
});

export default function Izin() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const handleShowDetail = () => {
    setIsShowDetail(true)
  }

  const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
    return {
      accessorKey: item,
      cell: (info) => info.column.id === 'Detail' ? <Grid container justifyContent='center' style={{ padding: '3px 0', borderRadius: 3 }}><Icon iconName='IcEye' style={{ cursor: 'pointer' }} size={24} onClick={handleShowDetail} /></Grid> : info.getValue(),
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
    <>
      {isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
      <Wrapper>
        <WrapperTitle style={{ margin: '20px 0 30px' }}>
          <TitleText>Report Izin</TitleText>
        </WrapperTitle>
        <WrapperTable>
          <TopFilter />
          <SecondFilter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <TableComponent2
            table={table}
          />
        </WrapperTable>
      </Wrapper>
    </>
  );
}
