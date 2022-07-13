import { Grid, ISelectItem, Select } from '@hudoro/neron'
import TitlePage from 'atoms/TitlePage'
import React, { useEffect, useState } from 'react'
import { listPages, updatePages } from 'services/pages'
import { notify } from 'utils/functions'
import { fontSizing } from 'utils/styles'
import { SelectLabel } from '../styles'

interface IProps {
   loginDefaultValue: ISelectItem
   navbarDefaultValue: ISelectItem
}

export default function Layout({ loginDefaultValue, navbarDefaultValue }: IProps) {
   const [layout, setLayout] = useState([])
   const [isDisabled, setIsDisabled] = useState(true)

   useEffect(() => {
      setIsDisabled(true)
      listPages({
         path: 'settings/pages'
      }).then(res => {
         const newData = res.data.data.map((item: { id: any; pageId: any }) => {
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
               pageId: e?.values
            }
         })
         return notify('Berhasil mengubah layout', 'success')
      } catch (error: any) {
         return notify(error.message, 'error')
      }
   }

   return (
      <>
         <TitlePage type="h4" styles={{ margin: "50px 0 30px", fontSize: fontSizing.xl.fontSize }}>
            Layout
         </TitlePage>
         <Grid container flexDirection='column' gap={30}>
            <Grid container flexDirection='column' gap={5}>
               <SelectLabel >Pilih layout login</SelectLabel>
               <Select items={layout} disabled={isDisabled} onChange={handleChangeLayout} placeholder='change layout' defaultValue={loginDefaultValue} />
            </Grid>
            <Grid container flexDirection='column' gap={5}>
               <SelectLabel >Pilih posisi navbar</SelectLabel>
               <Select items={[{ id: 1, values: 'Center', label: 'Center' }]} defaultValue={navbarDefaultValue} />
            </Grid>
         </Grid>
      </>
   )
}
