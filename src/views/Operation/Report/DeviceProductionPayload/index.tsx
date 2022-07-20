import { ISelectItem } from "@hudoro/neron";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useSetMenuTypeOperationReport } from "recoil/menuTypeOperationReport/atom";
import Layout from "src/components/layouts/Dashboard/layout";
// import DisplayData from "src/components/layouts/Dashboard/layout/DisplayData";
import SearchingForm from "src/components/organism/SearchingForm";
import getOperationReport from "src/components/organism/SearchingForm/getData";
import { inputDropDownOperation2 } from "utils/dummy";
import { convert, renderType } from "utils/functions";
import { IDropdownData, IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "./DisplayData";

interface IProps {
  defaultValue: IDropdownData;
}

export default function DeviceProductionPayload({
  defaultValue,
}: IProps) {
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
    return Router.replace(`/dashboard/operation/report/${e?.values}`).then(() =>
      Router.reload()
    );
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
    <Layout title="Operation / Report">
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
    </Layout>
  );
}
