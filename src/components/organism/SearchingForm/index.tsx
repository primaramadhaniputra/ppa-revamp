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
  dropDownDefaultvalue?: IDropdownData;
  dropDownData?: IDropdownData[];
  onChangeDropdownMenu?: (
    e: ISelectItem | ISelectItem[] | null
  ) => Promise<boolean>;
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
}: IProps) {
  const [isShowDate, setIsShowDate] = useState(false);
  const handleDate = () => {
    return setIsShowDate(!isShowDate);
  };
  return (
    <Wrapper>
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
