import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import { inputDropDownOperation2 } from "utils/dummy";
// import { IDropdownData } from "utils/interfaces";
// import DeviceProductionEmptySpeed from "./Report/DeviceProductionEmptySpeed";
import DeviceProductionEmptyStop from "./Report/DeviceProductionEmptyStop";
import DeviceProductionLoadedSpeed from "./Report/DeviceProductionLoadedSpeed";
import DeviceProductionLoadingTime from "./Report/DeviceProductionLoadingTime";
import DeviceProductionPayload from "./Report/DeviceProductionPayload";
import DeviceProductionSpeed from "./Report/DeviceProductionSpeed";
import ObProductionDayli from "./Report/MOCO/ObProductionDayli";
import ObProductionHourly from "./Report/MOCO/ObProductionHourly";

import { ArrowDown, SelectContainer } from "./styles";


function renderContent(
  queryName: string,

) {
  switch (queryName) {
    case "device_production_payload":
      return (
        <DeviceProductionPayload />
      );
    case "device_production_empty_stop":
      return (
        <DeviceProductionEmptyStop />
      );
    case "device_production_loading_time":
      return (
        <DeviceProductionLoadingTime />
      );

    case "device_production_loaded_speed":
      return (
        <DeviceProductionLoadedSpeed />
      );

    // case "device_production_empty_speed":
    //   return (
    //     <DeviceProductionEmptySpeed />
    //   );
    case "device_production_speed":
      return (
        <DeviceProductionSpeed />
      );
    case "moco_obProduction_dayli":
      return (
        <ObProductionDayli />
      );
    case "moco_obProduction_hourly":
      return (
        <ObProductionHourly />
      );
    default:
      return <h1>banana</h1>;
  }
}

export default function Operation() {

  const [menu, setMenu] = useState('device_production_payload')

  const handleChangeMenu = (e: ISelectItem | ISelectItem[] | null) => {
    setMenu(e?.values)
  }

  return <>
    <SelectContainer >
      <label>Menu</label>
      <Select items={inputDropDownOperation2} defaultValue={{ id: 0, value: "device_production_payload", label: "Device / Production / Payload" }} onChange={handleChangeMenu} />
      <ArrowDown></ArrowDown>
    </SelectContainer>
    {renderContent(menu)}
  </>;
}
