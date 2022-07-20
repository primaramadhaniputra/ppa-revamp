import { ISelectItem } from "@hudoro/neron";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchingForm from "src/components/organism/SearchingForm";
import getOperationReport from "views/Operation/Report/getOperationReport";
import { inputDropDownOperation2 } from "utils/dummy";
import { convert } from "utils/functions";
import { IDropdownData, IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "./DisplayData";

interface IProps {
  defaultValue: IDropdownData;
}

export default function DeviceProductionEmptySpeed({
  defaultValue,
}: IProps) {
  const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
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
      'speed',
      startDate,
      endDate,
      setDataChart,
      setIsLoading
    );
  }, []);

  const handleChangeOperation = (e: ISelectItem | ISelectItem[] | null) => {
    router.push(`/dashboard/operation/report/${e?.values}`)
  };

  const handleSearchOperationReportDate = () => {
    const startDate = convert(state[0].startDate);
    const endDate = convert(state[0].endDate);
    getOperationReport(
      'speed',
      startDate,
      endDate,
      setDataChart,
      setIsLoading
    );
  };

  return (
    <>
      <SearchingForm
        title="Menu"
        placeholder="Device / Production / Payload"
        isMenu={true}
        isDate={true}
        isShift={false}
        dropDownData={inputDropDownOperation2}
        dropDownDefaultvalue={defaultValue}
        onChangeDropdownMenu={handleChangeOperation}
        onSearchDate={handleSearchOperationReportDate}
        calendarState={state}
        setCalendarState={setState}
      />
      <DisplayData
        data={dataChart}
        isLoading={isLoading}
      />
    </>
  );
}
