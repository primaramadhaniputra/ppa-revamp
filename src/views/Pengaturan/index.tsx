import { ISelectItem } from '@hudoro/neron'
import Tabs from 'molecules/Tabs'
import React, { useState } from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
import AdminTab from './AdminTab'
import ProfileTab from './ProfileTab'
import { TabWrapper } from './styles'

interface IProps {
   loginDefaultValue: ISelectItem
   navbarDefaultValue: ISelectItem
}

export default function Pengaturan({ loginDefaultValue, navbarDefaultValue }: IProps) {
   const [activeTab, setactiveTab] = useState(0)

   return (
      <Layout title='Pengaturan'>
         <TabWrapper  >
            <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
         </TabWrapper>
         {activeTab === 0 ? <ProfileTab /> : <AdminTab loginDefaultValue={loginDefaultValue} navbarDefaultValue={navbarDefaultValue} />}
      </Layout>
   )
}
