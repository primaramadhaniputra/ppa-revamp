import { Grid, ISelectItem, Select } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSetMenuTypeOperationReport } from "recoil/menuTypeOperationReport/atom";
import { dummyInputDropdown } from "utils/dummy";
import { convert } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DateCalendar from "./Date";
import getOperationReport from "./getData";
import { InputLabel, StyledIcon, Wrapper, WrapperInput } from "./styles";

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
  const [operationReportType, setOperationReportType] = useState("payloads");
  const setMenuOperationReport = useSetMenuTypeOperationReport();

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
  }, [operationReportType]);

  const handleSearchOperationReport = () => {
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

  const handleChangeOperation = (e: ISelectItem | ISelectItem[] | null) => {
    setOperationReportType(e?.values);
    setMenuOperationReport(e?.values);
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
              values: "payloads",
              label: "Device / Production / Payload",
            }}
            onChange={handleChangeOperation}
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
        <StyledIcon iconName="IcSearch" onClick={handleSearchOperationReport} />
        {isShowDate && <DateCalendar setState={setState} state={state} />}
      </WrapperInput>
    </Wrapper>
  );
}
