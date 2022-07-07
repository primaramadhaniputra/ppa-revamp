import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
import Banner from 'src/components/layouts/Dashboard/layout/Banner';
// import SearchingForm from 'src/components/organism/SearchingForm'
// import { inputDropDownOperation2 } from 'utils/dummy';


export default function Home() {
  return (
    <Layout title='Dashboard'>
      {/* <SearchingForm
        title="Menu"
        placeholder="Device / Production / Payload"
        isDate={true}
        isMenu={true}
        isShift={false}
        dropDownData={inputDropDownOperation2}
      /> */}
      <Banner />
    </Layout>
  )
}
