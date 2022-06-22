import React from 'react'

// DASHBOARD
// import Layout1 from 'src/components/layouts/Dashboard/layout-1'
// import Layout2 from 'src/components/layouts/Dashboard/layout-2'
// import Layout3 from 'src/components/layouts/Dashboard/layout-3'

// LOGIN
// import Login1 from 'src/components/layouts/Login/Login-1'
// import Login2 from 'src/components/layouts/Login/Login-2'
// import Login22 from 'src/components/layouts/Login/Login-2.2'
// import Login3 from 'src/components/layouts/Login/Login-3'
// import Login31 from 'src/components/layouts/Login/Login-3.1'
// import Login4 from 'src/components/layouts/Login/Login-4'
// import Login41 from 'src/components/layouts/Login/Login-4.1'
// import Login5 from 'src/components/layouts/Login/Login-5'
// import Login51 from 'src/components/layouts/Login/Login-5.1'
import Login6 from 'src/components/layouts/Login/Login-6'


// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { Calendar } from 'react-date-range';
// import { DateRangePicker } from 'react-date-range';
// import { DateRange } from 'react-date-range';
// import { useState } from 'react'
export default function Home() {
  // const handleSelect = (date: any) => {
  //   console.log(date); // native Date object
  // }

  // const handleSelect = (ranges: any) => {
  //   console.log(ranges); // native Date object
  // }
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: 'selection'
  //   }
  // ]);

  return (

    // DASHBOARD 
    // <Layout1 />
    // <Layout2 />
    // <Layout3 />

    // Login
    // <Login1 />
    // <Login2 />
    // <Login22 />
    // <Login3 />
    // <Login31 />
    // <Login4 />
    // <Login41 />
    // <Login5 />
    // <Login51 />
    <Login6 />

    // date picker
    // <Calendar
    //   date={new Date()}
    //   onChange={handleSelect}
    // />

    // <DateRangePicker
    //   ranges={[selectionRange]}
    //   onChange={handleSelect}
    // />

    // <DateRange
    //   editableDateInputs={true}
    //   onChange={item => setState([item.selection])}
    //   moveRangeOnFirstSelection={false}
    //   ranges={state}
    // />
  )
}
