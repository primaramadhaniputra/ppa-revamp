import React from "react";
import { IDropdownData } from "utils/interfaces";
import DeviceProductionPayload from "./Report/DeviceProductionPayload";
import RDPP from "./Report/RDPP";
interface IProps {
  defaultValue: IDropdownData;
  data: IDropdownData[];
  queryName: string;
}

function renderContent(
  queryName: string,
  data: IDropdownData[],
  defaultValue: IDropdownData
) {
  switch (queryName) {
    case "device_production_payload":
      return (
        <DeviceProductionPayload
          defaultValue={defaultValue}
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

export default function Operation({ data, defaultValue, queryName }: IProps) {
  return <>{renderContent(queryName, data, defaultValue)}</>;
}
