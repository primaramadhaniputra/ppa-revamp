import React, { useState } from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
import DisplayData from 'src/components/layouts/Dashboard/layout/DisplayData';
import HomeInput from 'src/components/organism/HomeInput'
import { IOperationReportPayloadData } from 'utils/interfaces';

export default function Home() {
  const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Layout title='Operation / Report'>
      <HomeInput
        title="Menu"
        placeholder="Device / Production / Payload"
        setDataChart={setDataChart}
        setIsLoading={setIsLoading}
      />
      <DisplayData data={dataChart} isLoading={isLoading} />
    </Layout>
  )
}
