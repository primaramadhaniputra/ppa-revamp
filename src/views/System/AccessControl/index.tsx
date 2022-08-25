import React, { useEffect, useState } from "react";
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
import TableComponent2 from "src/components/organism/TableComp2";
import { DisableUserdWebAdmin, getListUsersWebAdmin, ResetPasswordWebAdmin } from "services/webAdmin";
import { notify } from "utils/functions";
import { ISingleUser, IUserList } from "utils/interfaces";
import Loading from "atoms/Loading";
import FlyingForm from "./FlyingForm";
import { useRouter } from "next/router";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import Arrow from "atoms/Arrow";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Html } from 'next/document'
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
  }];

export default function AccessControl() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [DataTable, setDataTable] = React.useState(defaultDataTable)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isEdit, setIsEdit] = React.useState(false)
  const [dataUser, setDataUser] = React.useState<ISingleUser>()
  const router = useRouter()
  const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
  const [formPosition, setformPosition] = useState(0)

  const handleEdit = async (target: any, e: { row: any }) => {
    const data = e.row.original
    setDataUser(data)
    setIsEdit(true)
    setformPosition(target.pageY - target.clientY)
  }
  const handleResetPassword = async (e: any) => {
    const userID = e.row.original.Id
    const userNrp = e.row.original.NRP
    if (confirm('Are you sure to reset password ? ')) {
      try {
        await ResetPasswordWebAdmin({
          path: `reset-password/${userID}`,
          body: {
            newPassword: userNrp,
            confirmNewPassword: userNrp
          }
        })
        notify('Berhasil mereset password user', 'success')
        router.reload()
      } catch (error: any) {
        return notify(error.message, 'error')
      }
    }
  }

  const disableUser = async (e: any) => {
    const userID = e.row.original.Id
    if (confirm('Are you sure to disable user ? ')) {
      try {
        await DisableUserdWebAdmin({
          path: `delete/${userID}`
        })
        notify('Berhasil disable user', 'success')
        router.reload()
      } catch (error: any) {
        return notify(error.message, 'error')
      }
    }
  }

  const getAllUsers = async () => {
    try {
      setIsLoading(true)
      const data = await getListUsersWebAdmin({
        params: {
          perPage: 100
        }
      })
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

  const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
    return {
      accessorKey: item,
      cell: (info) => {
        return (info.column.id === 'Action' ?
          <Wrapper>
            <IconContainer title="Edit">
              <IcEdit
                width={20}
                cursor="pointer"
                color="white"
                strokeWidth={1.5}
                onClick={(target) => handleEdit(target, info)}

              />
            </IconContainer>
            <IconContainer title="Reset Password">
              <IcRefresh
                width={20}
                cursor="pointer"
                color="white"
                strokeWidth={1.5}
                onClick={() => handleResetPassword(info)}
              />
            </IconContainer>
            <IconContainer title="Disable">
              <IcBan width={20} cursor="pointer" color="white" strokeWidth={2} onClick={() => disableUser(info)} />
            </IconContainer>
          </Wrapper>
          : info.getValue())
      },
      header: (data) => {
        return (
          <THContainer key={index}>
            <span>
              {item}
            </span>
            {data.column.id !== "Action" && <Arrow />}
          </THContainer>
        )
      },
      footer: (props) => props.column.id,
    }
  });


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

  isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any)

  return (
    <>
      <FlyingForm closeForm={closeEdit} isEdit={isEdit} dataUser={dataUser} formPosition={formPosition} />
      <Container style={{ position: 'relative' }} >
        {isLoading && <Loading />}
        <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={true} buttonTitle='EXPORT' />
        <TableComponent2
          table={table}
        />
      </Container>
    </>
  );
}
