import { Grid, Text, Toggler } from "@hudoro/neron";
import DateCalendar from "molecules/Date";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import { colors } from "utils/styles";
import Product from "./Product";
import { TabsContainer, TabsText, WrapperDate } from "./styles";

const tabs = ['MTD', 'YTD', 'WTD']

export default function Production() {
   const [date, setDate] = useState(new Date())
   const [activeTabs, setActiveTabs] = useState(0)


   return (
      <Layout title="Production / Report">
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
               <DateCalendar dateState={date} setDateState={setDate} title="Date" />
            </Grid>
         </WrapperDate>
         <Product />
      </Layout>
   );
}
