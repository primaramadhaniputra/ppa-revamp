import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import { IDropdownData } from "utils/interfaces";
import DeviceProductionEmptySpeed from "./Report/DeviceProductionEmptySpeed";
import DeviceProductionEmptyStop from "./Report/DeviceProductionEmptyStop";
import DeviceProductionLoadedSpeed from "./Report/DeviceProductionLoadedSpeed";
import DeviceProductionLoadingTime from "./Report/DeviceProductionLoadingTime";
import DeviceProductionPayload from "./Report/DeviceProductionPayload";
interface IProps {
  defaultValue: IDropdownData;
  data: IDropdownData[];
  queryName: string;
}

function renderContent(
  queryName: string,
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
        <DeviceProductionEmptyStop
          defaultValue={defaultValue}
        />
      );
    case "device_production_loading_time":
      return (
        <DeviceProductionLoadingTime
          defaultValue={defaultValue}
        />
      );

    case "device_production_loaded_speed":
      return (
        <DeviceProductionLoadedSpeed
          defaultValue={defaultValue}
        />
      );

    case "device_production_empty_speed":
      return (
        <DeviceProductionEmptySpeed
          defaultValue={defaultValue}
        />
      );
    case "device_production_speed":
      return (
        <DeviceProductionEmptySpeed
          defaultValue={defaultValue}
        />
      );
    default:
      return <h1>banana</h1>;
  }
}

export default function Operation({ defaultValue, queryName }: IProps) {
  return <Layout title="Operation / Report">
    {renderContent(queryName, defaultValue)}
  </Layout>;
}
