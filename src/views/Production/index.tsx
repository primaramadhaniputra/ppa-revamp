import { Grid, Text, Toggler } from "@hudoro/neron";
import DateCalendar from "molecules/Date";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Product from "./Product";
import { WrapperDate } from "./styles";

export default function Production() {
   const [date, setDate] = useState(new Date())


   return (
      <Layout title="Production / Report">
         <WrapperDate>
            <Grid container gap={5} alignItems="flex-end" style={{ height: '47px', justifyContent: 'end' }} >
               <Text variant="h4" style={{ fontSize: '14px' }}>TC</Text>
               <Toggler />
               <Text variant="h4" style={{ fontSize: '14px' }}>JS</Text>
            </Grid>
            <Grid container >
               <DateCalendar dateState={date} setDateState={setDate} title="Date" />
            </Grid>
         </WrapperDate>
         <Product />
      </Layout>
   );
}
