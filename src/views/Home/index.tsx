import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
import Banner from 'src/components/layouts/Dashboard/layout/Banner';
import SearchingForm from 'src/components/organism/SearchingForm'


export default function Home() {


  return (
    <Layout title='Operation / Report'>
      <SearchingForm
        title="Menu"
        placeholder="Device / Production / Payload"
        isDate={true}
        isMenu={true}
      />
      <Banner />
    </Layout>
  )
}
