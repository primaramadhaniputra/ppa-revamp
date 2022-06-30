import { Grid, Icon, Select } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { dummyInputDropdown } from "utils/dummy";
import { convert } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DateCalendar from "./Date";
import getOperationReport from "./getData";
import { InputLabel, Wrapper, WrapperInput } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  setDataChart: Dispatch<
    SetStateAction<IOperationReportPayloadData | undefined>
  >;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function HomeInput({
  title,
  placeholder,
  setDataChart,
  setIsLoading,
}: IProps) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isShowDate, setIsShowDate] = useState(false);
  const [operationReportType, setOperationReportType] = useState("Payload");
  console.log(setOperationReportType);
  const handleDate = () => {
    return setIsShowDate(!isShowDate);
  };
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
  }, []);

  const hanldeSearchOperationReport = () => {
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
    <Wrapper>
      <Grid>
        <InputLabel variant="p">{title}</InputLabel>
        <WrapperInput>
          <Select
            items={dummyInputDropdown}
            placeholder={placeholder}
            defaultValue={{
              id: 0,
              value: "0de1dee1-af35-4c0b-9aaf-041c5e9da5c5",
              label: "Payload",
            }}
          />
        </WrapperInput>
      </Grid>
      <WrapperInput>
        <LabeledInput
          name="end"
          title="Date"
          onClick={handleDate}
          value={`${convert(state[0].startDate)} ~ ${convert(
            state[0].endDate
          )}`}
        />
        <Icon
          iconName="IcSearch"
          style={{
            position: "absolute",
            right: "10px",
            top: "42px",
            cursor: "pointer",
          }}
          onClick={hanldeSearchOperationReport}
        />
        {isShowDate && <DateCalendar setState={setState} state={state} />}
      </WrapperInput>
    </Wrapper>
  );
}
