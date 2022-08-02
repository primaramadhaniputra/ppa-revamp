import { Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { FileContainer, ThItemContainer, Wrapper, WrapperTable, WrapperTitle } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    id: "HD787",
    lapangan: "Hd123",
    tahunan: `33${index}`,
    leave: "2022-17-08",
    back: "2022-17-08",
    status: "2022-17-08 02:12:12",
    action: "",
  };
});

export default function LeavingApplication() {

  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const handleShowDetail = () => {
    setIsShowDetail(true)
  }

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "id",
      cell: (info) => info.getValue(),
      header: () => (
        <ThItemContainer>
          <span>
            ID
          </span>
        </ThItemContainer>
      ),
    },
    {
      header: 'Cuti',
      columns: [
        {
          accessorFn: (row) => row.lapangan,
          id: "lapangan",
          cell: (info) => info.getValue(),
          header: () => (
            <ThItemContainer >
              <span>
                Lapangan
              </span>
            </ThItemContainer>
          ),
        },
        {
          accessorKey: "tahunan",
          header: () => (
            <ThItemContainer >
              <span>
                Tahunan
              </span>
            </ThItemContainer>
          ),
        },
      ]
    },
    {
      header: 'Date',
      columns: [
        {
          accessorKey: "leave",
          header: () => (
            <ThItemContainer >
              <span>
                Leave
              </span>
            </ThItemContainer>
          ),
        },
        {
          accessorKey: "back",
          header: () => (
            <ThItemContainer >
              <span>
                Back
              </span>
            </ThItemContainer>
          ),
        },
      ]
    },
    {
      accessorKey: "status",
      header: () => (
        <ThItemContainer>
          <span>
            Status
          </span>
        </ThItemContainer>
      ),
    },
    {
      accessorKey: "action",
      cell: () => (
        <Grid container justifyContent="center" style={{ cursor: 'pointer' }} onClick={handleShowDetail} >
          <Icon iconName="IcEye" size={16} />
        </Grid>
      ),
      header: () => (
        <ThItemContainer>
          <span>
            Action
          </span>
        </ThItemContainer>
      ),

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
      {isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
      <WrapperTitle>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: '22px' }} >Teamwork / Form / Leaving Application</Text>
        <FileContainer>
          <label htmlFor="file">Leave Application</label>
          <input type='file' id="file" hidden />
        </FileContainer>
      </WrapperTitle>
      <WrapperTable>
        <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <TableComponent2 table={table} />
      </WrapperTable>
    </Wrapper>
  );
}
