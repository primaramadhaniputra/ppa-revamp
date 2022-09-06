import { fontFamilies, Grid, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import ShowDataTable from "molecules/ShowDataTable";
import React from "react";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { exportFile } from "utils/functions";
import {
  ButtonWrapper,
  ContainerPeriode,
  Wrapper,
  StyledInput,
  SearchWrapper,
  SearchInput,
} from "./styles";

interface IProps {
  withButton: boolean;
  buttonTitle: string;
  handleChangeTotalShowData: (e: {
    target: {
      value: number;
    };
  }) => void;
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  [x: string]: any;
}

export default function TableFilterSearch({
  table,
  handleChangeTotalShowData,
  globalFilter,
  setGlobalFilter,
  withButton,
  buttonTitle,
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
      <SearchWrapper>
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
            placeholder="Search..."
          />
        </SearchInput>
      </SearchWrapper>
    );
  }

  return (
    <Wrapper>
      <ContainerPeriode style={{ minWidth: "100px" }}>
        <ShowDataTable
          value={{
            id: 0,
            values: `${table.getState().pagination.pageSize}`,
            label: `${table.getState().pagination.pageSize}`,
          }}
          handleChange={handleChangeTotalShowData}
        />
      </ContainerPeriode>
      <ButtonWrapper>
        {withButton && (
          <StyledButton
            style={{
              backgroundColor: "#25B78A",
              color: colors.white,
              padding: "0 10px",
              fontWeight: fontWeights.bold,
              borderRadius: "2px",
              fontSize: fontSizing.lg.fontSize,
            }}
            onClick={exportFile}
          >
            {buttonTitle}
          </StyledButton>
        )}
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(String(e))}
          className="p-2 font-lg shadow border border-block"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
