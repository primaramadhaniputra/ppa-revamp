import { Grid, ISelectItem, Select } from "@hudoro/neron";
import Loading from "atoms/Loading";
import React, { useState } from "react";
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
  const [activeDisplayData, setActiveDisplayData] = useState("Table");

  const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
    return setActiveDisplayData(e?.values);
  };

  if (isLoading) {
    return <Loading />;
  }

  const renderDisplayData = (type: string) => {
    if (type === "Table") {
      return <TableData data={data?.range.data} />;
    }
    if (type === "Trend") {
      return <Trend datas={data?.trend} />;
    }
    return <ChartData data={data?.range.data} />;
  };

  return (
    <Wrapper>
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
            items={dummyDisplayDataDropdown}
            defaultValue={{ id: 1, value: activeDisplayData, label: "Table" }}
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
