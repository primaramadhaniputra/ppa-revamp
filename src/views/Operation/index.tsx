import { ISelectItem } from '@hudoro/neron';
import Router from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSetMenuTypeOperationReport } from 'recoil/menuTypeOperationReport/atom';
import Layout from 'src/components/layouts/Dashboard/layout'
import DisplayData from 'src/components/layouts/Dashboard/layout/DisplayData';
import SearchingForm from 'src/components/organism/SearchingForm'
import getOperationReport from 'src/components/organism/SearchingForm/getData';
import { convert, renderType } from 'utils/functions';
import { IDropdownData, IOperationReportPayloadData } from 'utils/interfaces';
interface IProps {
   defaultValue: IDropdownData
   data: IDropdownData[]
   queryName: string
}
export default function Operation({ data, defaultValue, queryName }: IProps) {
   const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
   const [isLoading, setIsLoading] = useState(true);
   const [operationReportType, setOperationReportType] = useState("payloads");
   const setMenuOperationReport = useSetMenuTypeOperationReport();
   const [state, setState] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      },
   ]);


   useEffect(() => {
      const startDate = convert(state[0].startDate);
      const endDate = convert(state[0].endDate);
      getOperationReport(
         operationReportType,
         startDate,
         endDate,
         setDataChart,
         setIsLoading
      );
   }, [operationReportType]);

   const handleChangeOperation = (e: ISelectItem | ISelectItem[] | null) => {
      setOperationReportType(e?.values);
      setMenuOperationReport(renderType(e?.values));
      return Router.replace(`/dashboard/operation/${e?.values}`)
   };

   const handleSearchOperationReportDate = () => {
      const startDate = convert(state[0].startDate);
      const endDate = convert(state[0].endDate);
      getOperationReport(
         operationReportType,
         startDate,
         endDate,
         setDataChart,
         setIsLoading
      );
   };

   return (
      <>
         {queryName.includes('report_device_production') ?
            <Layout title='Operation / Report'>
               <SearchingForm
                  title="Menu"
                  placeholder="Device / Production / Payload"
                  isMenu={true}
                  isDate={true}
                  dropDownData={data}
                  dropDownDefaultvalue={defaultValue}
                  onChangeDropdownMenu={handleChangeOperation}
                  onSearchDate={handleSearchOperationReportDate}
                  calendarState={state}
                  setCalendarState={setState}
               />
               <DisplayData data={dataChart} isLoading={isLoading} />
            </Layout> :
            <h1>{queryName}</h1>
         }
      </>
   )
}
