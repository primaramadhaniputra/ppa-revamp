import { Grid, Text, Toggler } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import DateWithRange from "molecules/DateWithRange";
import React, { useEffect, useState } from "react";
import { getAllSiteProduction } from "services/production";
import { convert, notify } from "utils/functions";
import { allSites } from "utils/interfaces";
import { colors } from "utils/styles";
import Product from "./Product";
import { TabsContainer, TabsText, WrapperDate } from "./styles";

const tabs = ['MTD', 'YTD', 'WTD']

export default function Production() {
   const [activeTabs, setActiveTabs] = useState(0)
   const [sites, setSites] = useState<allSites[]>()
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection'
      }
   ]);

   useEffect(() => {
      if (activeTabs === 0) {
         const date = new Date()
         const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
         setDate([
            {
               startDate: firstDay,
               endDate: new Date(),
               key: 'selection'
            }
         ])
      } else if (activeTabs === 1) {
         const date = new Date()
         date.setMonth(0);
         const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
         setDate([
            {
               startDate: firstDay,
               endDate: new Date(),
               key: 'selection'
            }
         ])
      } else {
         const date = new Date();
         date.setDate(date.getDate() - 7);
         setDate([
            {
               startDate: date,
               endDate: new Date(),
               key: 'selection'
            }
         ])
      }

   }, [activeTabs])

   const groupType = (type: number) => {
      if (type === 0) {
         return 'mtd'
      } else if (type === 1) {
         return 'ytd'
      } else {
         return 'wtd'
      }
   }

   const getSites = async () => {
      try {
         const startTime = convert(Date.parse(date[0].startDate as unknown as string))
         const endTime = convert(Date.parse(date[0].endDate as unknown as string))

         const data = await getAllSiteProduction({
            params: {
               start: startTime,
               end: endTime,
               group: groupType(activeTabs)
            }
         })
         setSites(data.data.data)
         return notify('Berhasil mendapatkan data', 'success')
      } catch (error: any) {
         return notify(error.message, 'error')
      }
   }

   useEffect(() => {
      getSites()
   }, [date])
   return (
      <>
         <TitlePage type="h3" styles={{ fontSize: "22px" }}>Production / Report</TitlePage>
         <WrapperDate>
            <Grid container gap={5} alignItems="flex-end" style={{ height: '44px', justifyContent: 'end' }} >
               <Text variant="h4" style={{ fontSize: '14px' }}>TC</Text>
               <Toggler />
               <Text variant="h4" style={{ fontSize: '14px' }}>JS</Text>
            </Grid>
            <TabsContainer >
               {
                  tabs.map((item, index) => <TabsText key={index} style={{ backgroundColor: activeTabs === index ? colors.primary : '#A8A9AA' }} onClick={() => setActiveTabs(index)} >{item}</TabsText>)
               }
            </TabsContainer>
            <Grid container >
               <DateWithRange dateState={date} setDateState={setDate} title="Date" />
            </Grid>
         </WrapperDate>
         <Product sites={sites as allSites[]} />
      </>
   );
}
