import { Grid, ISelectItem, Select } from '@hudoro/neron'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useNavbarDefaultValue } from 'recoil/navbarDefaultValue/atom'
import { listPages, updatePages } from 'services/pages'
import { notify } from 'utils/functions'
import { SelectLabel } from '../../styles'

export default function NavbarForm() {
   const navbarDefault = useNavbarDefaultValue()
   const [layout, setLayout] = useState([])
   const [isDisabled, setIsDisabled] = useState(true)

   useEffect(() => {
      setIsDisabled(true)
      listPages({
         path: 'settings/pages'
      }).then(res => {
         const newData = res.data.data.filter((item: { name: string }) => item.name === "LOGIN")
            .map((item: { id: any; pageId: any }) => {
               return { id: item.id, values: item.pageId.toString(), label: item.pageId.toString() }
            })
         setLayout(newData)
         setIsDisabled(false)
         return notify('Berhasil mendapatkan layout', 'success')
      })
         .catch(err => {
            setIsDisabled(true)
            return notify(err.message, 'error')
         })
   }, [])

   const handleChangeLayout = async (e: ISelectItem | ISelectItem[] | null) => {
      try {
         await updatePages({
            path: 'settings/pages',
            body: {
               pageId: e?.values,
               name: "NAVBAR"
            }
         })
         notify('Berhasil mengubah layout', 'success')
         return Router.reload()
      } catch (error: any) {
         return notify(error.message, 'error')
      }
   }

   return (
      <Grid container flexDirection='column' gap={5}>
         <SelectLabel >Pilih posisi navbar</SelectLabel>
         <Select items={layout} defaultValue={navbarDefault} disabled={isDisabled} onChange={handleChangeLayout} />
      </Grid>
   )
}
