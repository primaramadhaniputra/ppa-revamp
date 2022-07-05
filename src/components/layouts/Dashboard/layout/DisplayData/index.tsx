import { Grid, ISelectItem, Select } from "@hudoro/neron";
import Loading from "atoms/Loading";
import React, { useEffect, useState } from "react";
import { useMenuTypeOperationReportValue } from "recoil/menuTypeOperationReport/atom";
import { dummyDisplayDataDropdown } from "utils/dummy";
import { IOperationReportPayloadData } from "utils/interfaces";
import ChartData from "./ChartData";
import { TotalText, Wrapper, WrapperTotalText } from "./styles";
import TableData from "./Table";
import Trend from "./Trend";

interface IProps {
  data: IOperationReportPayloadData | undefined;
  isLoading: boolean;
}

export default function DisplayData({ data, isLoading }: IProps) {
  const [activeDisplayData, setActiveDisplayData] = useState("Chart");
  const [dropdownChart, setDropdownChart] = useState(dummyDisplayDataDropdown);
  const menuOperationReportValue = useMenuTypeOperationReportValue();

  const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
    return setActiveDisplayData(e?.values);
  };

  useEffect(() => {
    if (menuOperationReportValue !== "payloads") {
      const newDropdowChart = dropdownChart.filter(
        (item) => item.values !== "Table"
      );
      return setDropdownChart(newDropdowChart);
    }
    return setDropdownChart(dummyDisplayDataDropdown);
  }, [menuOperationReportValue]);

  const renderDisplayData = (type: string) => {
    if (type === "Table" && menuOperationReportValue === "payloads") {
      return <TableData data={data?.range.data} />;
    }
    if (type === "Trend") {
      return <Trend datas={data?.trend} />;
    }
    return <ChartData data={data?.range.data || [{}]} />;
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        gap={20}
        style={{ width: "100%" }}
      >
        <Grid style={{ maxWidth: "300px" }}>
          <Select
            onChange={handleActiveDisplayData}
            items={dropdownChart}
            defaultValue={dummyDisplayDataDropdown[1]}
          />
        </Grid>
        <WrapperTotalText>
          <TotalText>∑ {data?.total} </TotalText>
          <TotalText>Avg {data?.average} </TotalText>
        </WrapperTotalText>
      </Grid>
      {renderDisplayData(activeDisplayData)}
    </Wrapper>
  );
}
