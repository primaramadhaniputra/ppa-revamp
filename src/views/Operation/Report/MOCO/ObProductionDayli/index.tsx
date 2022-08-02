import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { SingleStatus, StatusContainer, ThItemContainer, Wrapper } from "./styles";
// ArrowDown, ArrowUp,
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
// import SecondFilter from "./SecondFilter";
import TableComponent2 from "src/components/organism/TableComp2";

interface IProps {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
  return {
    ['LOADER']: "E5503PPA",
    ['BL']: "2.406,00",
    ['DW']: ``,
    ['MUD 100%']: "",
    ["MUD CAIR"]: "",
    ['MUD ORI 1']: "",
    ['MUD ORI']: "12.938,70",
    ['OB']: "",
    ['SOIL']: "",
    ['TOTAL']: "2.406,00",
    ['PLAN']: "",
    ['ACH']: "",
  };
});

export default function ObProductionDayli() {
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter,
    // setGlobalFilter
  ] = React.useState("");
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
          {/* <Grid container flexDirection="column">
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid> */}
        </ThItemContainer>
      ),
      footer: (data) => {
        return <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>{data.header.id === 'LOADER' ? "TOTAL" : 0}</span>
      },
    }
  });
  const table = useReactTable({
    data: defaultDataTable,
    columns: columns as any,
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

  // const handleChangeTotalShowData = (e: { target: { value: number } }) => {
  //   table.setPageSize(e.target.value);
  // };

  return (
    <Wrapper>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ margin: '30px 0' }}>
        <Text variant="h4" style={{ fontWeight: fontWeights.semi }} >Operation / Report</Text>
      </Grid>
      <TopFilter />
      <StatusContainer style={{ margin: '20px  0 5px 0' }}>
        <SingleStatus >
          <Text variant="h4" >PLAN</Text>
          <Text variant="p" >0,00</Text>
        </SingleStatus>
        <SingleStatus container gap={10} flexDirection='column' alignItems="center" >
          <Text variant="h4" >TOTAL TC</Text>
          <Text variant="p" >281.203,75</Text>
        </SingleStatus>
        <SingleStatus container gap={10} flexDirection='column' alignItems="center" >
          <Text variant="h4" >TOTAL JS</Text>
          <Text variant="p" >281.203,75</Text>
        </SingleStatus>
        <SingleStatus container gap={10} flexDirection='column' alignItems="center" >
          <Text variant="h4" >ACHIEVEMENT</Text>
          <Text variant="p" >Infinity %</Text>
        </SingleStatus>
      </StatusContainer>
      <TableComponent2
        table={table}
        noPagination={true}
        withFooter={true}
      />
    </Wrapper>
  );
}
