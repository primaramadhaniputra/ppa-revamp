import React, { useEffect } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { IcBan, IcEdit, IcRefresh } from "atoms/Icon";
import { Container, IconContainer, THContainer, Wrapper } from "./styles";
import { Grid } from "@hudoro/neron";
import { ArrowDown, ArrowUp } from "../styles";
import TableComponent2 from "src/components/organism/TableComp2";
import Filter from "./Filter";
import { getListUsersWebAdmin } from "services/webAdmin";
import { notify } from "utils/functions";
import { ISingleUser, IUserList } from "utils/interfaces";
import Loading from "atoms/Loading";
import FlyingForm from "./FlyingForm";

interface Person {
  [x: string]: any;
}

export const defaultDataTable = [
  {
    NRP: "",
    Name: "",
    Dept: "",
    Position: "",
    Level: "",
    Action: "",
    Id: ''
  }];

export default function AccessControl() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [DataTable, setDataTable] = React.useState(defaultDataTable)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isEdit, setIsEdit] = React.useState(false)
  const [dataUser, setDataUser] = React.useState<ISingleUser>()

  const handleEdit = async (e: { row: any }) => {
    const data = e.row.original
    console.log(data)
    setDataUser(data)
    setIsEdit(true)
  }
  const getAllUsers = async () => {
    try {
      setIsLoading(true)
      const data = await getListUsersWebAdmin({})
      const newData = data.data.data.map((item: IUserList) => {
        return {
          NRP: item.nrp,
          Name: item.fullName,
          Dept: item.department,
          Position: item.position,
          Level: item.level,
          Action: '',
          Id: item.id
        }
      })
      setDataTable(newData)
      setIsLoading(false)
    } catch (error: any) {
      setIsLoading(false)
      return notify(error.message, 'error')
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "NRP",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            NRP
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.Name,
      id: "Name",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            Name
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Dept",
      header: () => (
        <THContainer>
          <span>
            Dept
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Position",
      header: () => (
        <THContainer>
          <span>
            Position
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Level",
      header: () => (
        <THContainer>
          <span>
            Level
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Action",
      cell: (info) => (
        <Wrapper>
          <IconContainer>
            <IcEdit
              width={20}
              cursor="pointer"
              color="white"
              strokeWidth={1.5}
              onClick={() => handleEdit(info)}
            />
          </IconContainer>
          <IconContainer>
            <IcRefresh
              width={20}
              cursor="pointer"
              color="white"
              strokeWidth={1.5}
            />
          </IconContainer>
          <IconContainer>
            <IcBan width={20} cursor="pointer" color="white" strokeWidth={2} />
          </IconContainer>
        </Wrapper>
      ),
      header: () => (
        <span>
          Action
        </span>
      ),
      footer: (props) => props.column.id,
    },
  ];

  const table = useReactTable({
    data: DataTable,
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

  const closeEdit = () => {
    setIsEdit(false)
  }

  return (
    <>
      <FlyingForm closeForm={closeEdit} isEdit={isEdit} dataUser={dataUser} />
      <Container style={{ position: 'relative' }} >
        {isLoading && <Loading />}
        <Filter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <TableComponent2
          table={table}
        />
      </Container>
    </>
  );
}
