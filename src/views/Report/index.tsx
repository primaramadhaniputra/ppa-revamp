import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
// import DisplayData from 'src/components/layouts/Dashboard/layout/DisplayData';
import SearchingForm from 'src/components/organism/SearchingForm'
// import { IOperationReportPayloadData } from 'utils/interfaces';

export default function Report() {
  // const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <Layout title='Operation / Report'>
      <SearchingForm
        title="Menu"
        placeholder="Device / Production / Payload"
        isDate={true}
        isMenu={true}
        isShift={false}
      />
      {/* <DisplayData data={dataChart} isLoading={isLoading} /> */}
    </Layout>
  )
}
