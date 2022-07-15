import React from "react";
import { IDropdownData } from "utils/interfaces";
import RDPP from "./RDPP";

export default function renderContent(
  queryName: string,
  data: IDropdownData[],
  defaultValue: IDropdownData
) {
  switch (queryName) {
    case "device_production_payload":
      return (
        <RDPP
          data={data}
          defaultValue={defaultValue}
          isMenu={true}
          isDate={true}
          isShift={false}
          typeDisplayData={[
            {
              id: 0,
              values: "Range Data",
              label: "Range Data",
            },
            {
              id: 1,
              values: "Range Chart",
              label: "Range Chart",
            },
            {
              id: 2,
              values: "Trend",
              label: "Trend",
            },
          ]}
        />
      );
    case "device_production_empty_stop":
      return (
        <RDPP
          data={data}
          defaultValue={defaultValue}
          isMenu={true}
          isDate={true}
          isShift={false}
          typeDisplayData={[
            {
              id: 0,
              values: "Range Chart",
              label: "Range Chart",
            },
            {
              id: 1,
              values: "Trend",
              label: "Trend",
            },
          ]}
        />
      );
    case "device_production_loading_time":
      return (
        <RDPP
          data={data}
          defaultValue={defaultValue}
          isMenu={true}
          isDate={true}
          isShift={false}
          typeDisplayData={[
            {
              id: 0,
              values: "Range Chart",
              label: "Range Chart",
            },
            {
              id: 1,
              values: "Trend",
              label: "Trend",
            },
          ]}
        />
      );

    case "device_production_loaded_speed":
      return (
        <RDPP
          data={data}
          defaultValue={defaultValue}
          isMenu={true}
          isDate={true}
          isShift={false}
          typeDisplayData={[
            {
              id: 0,
              values: "Range Chart",
              label: "Range Chart",
            },
            {
              id: 1,
              values: "Trend",
              label: "Trend",
            },
          ]}
        />
      );

    case "device_production_empty_speed":
      return (
        <RDPP
          data={data}
          defaultValue={defaultValue}
          isMenu={true}
          isDate={true}
          isShift={false}
          typeDisplayData={[
            {
              id: 0,
              values: "Range Chart",
              label: "Range Chart",
            },
            {
              id: 1,
              values: "Trend",
              label: "Trend",
            },
          ]}
        />
      );

    default:
      return <h1>banana</h1>;
  }
}
