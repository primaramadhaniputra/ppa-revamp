import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import {
  SearchInput,
  SearchWrapper,
} from "views/System/VHMSDownload/Filter/styles";
import { TableTitle } from "../styles";
import {
  ButtonWrapper,
  ContainerPeriode,
  Wrapper,
  StyledInput,
} from "./styles";

interface IProps {
  handleChangeTotalShowData: (e: {
    target: {
      value: number;
    };
  }) => void;
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  [x: string]: any;
}
// table, handleChangeTotalShowData,
export default function SecondFilter({
  globalFilter,
  setGlobalFilter,
}: IProps) {
  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);

      return () => clearTimeout(timeout);
    }, [value]);

    return (
      <SearchWrapper style={{ width: "100%" }}>
        <Grid style={{ flex: 1 }}>
          <Text variant="p" style={{ fontFamily: fontFamilies.poppins }}>
            Search
          </Text>
        </Grid>
        <SearchInput>
          <StyledInput
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SearchInput>
      </SearchWrapper>
    );
  }

  return (
    <Wrapper>
      <ContainerPeriode>
        {/* <ShowDataTable value={{
               id: 0,
               values: `${table.getState().pagination.pageSize}`,
               label: `${table.getState().pagination.pageSize}`,
            }} handleChange={handleChangeTotalShowData} /> */}
        <TableTitle variant="h4">Data list subject quiz</TableTitle>
      </ContainerPeriode>
      <ButtonWrapper>
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(String(e))}
          className="p-2 font-lg shadow border border-block"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
