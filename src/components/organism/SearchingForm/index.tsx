import { Grid, ISelectItem, Select } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import React, { useState } from "react";
import { convert } from "utils/functions";
import { ICalendarState, IDropdownData } from "utils/interfaces";
import DateCalendar from "./Date";
import { InputLabel, StyledIcon, Wrapper, WrapperInput } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  isMenu: boolean;
  isDate: boolean;
  isShift: boolean;
  dropDownDefaultvalue?: IDropdownData;
  dropDownData?: IDropdownData[];
  onChangeDropdownMenu?: (e: ISelectItem | ISelectItem[] | null) => void;
  onSearchDate?: () => void;
  calendarState?: ICalendarState[];
  setCalendarState?: React.Dispatch<React.SetStateAction<ICalendarState[]>>;
}

export default function SearchingForm({
  title,
  placeholder,
  dropDownDefaultvalue,
  dropDownData,
  isMenu,
  isDate,
  onChangeDropdownMenu,
  onSearchDate,
  calendarState,
  setCalendarState,
  isShift,
}: IProps) {
  const [isShowDate, setIsShowDate] = useState(false);
  const handleDate = () => {
    return setIsShowDate(!isShowDate);
  };
  return (
    <Wrapper style={{ flex: "2" }}>
      {isShift && (
        <Grid>
          <InputLabel variant="p">Shift</InputLabel>
          <WrapperInput>
            <Select
              items={dropDownData as ISelectItem[]}
              placeholder={placeholder}
              defaultValue={dropDownDefaultvalue}
              onChange={onChangeDropdownMenu}
            />
          </WrapperInput>
        </Grid>
      )}
      {isMenu && (
        <Grid>
          <InputLabel variant="p">{title}</InputLabel>
          <WrapperInput>
            <Select
              items={dropDownData as ISelectItem[]}
              placeholder={placeholder}
              defaultValue={dropDownDefaultvalue}
              onChange={onChangeDropdownMenu}
            />
          </WrapperInput>
        </Grid>
      )}

      {isDate && calendarState && (
        <WrapperInput>
          <LabeledInput
            name="end"
            title="Date"
            onClick={handleDate}
            value={`${convert(calendarState[0].startDate)} ~ ${convert(
              calendarState[0].endDate
            )}`}
            onChange={() => {}}
          />
          <StyledIcon iconName="IcSearch" onClick={onSearchDate} />
          {isShowDate && (
            <DateCalendar setState={setCalendarState} state={calendarState} />
          )}
        </WrapperInput>
      )}
    </Wrapper>
  );
}
