import { fontFamilies, Grid, ISelectItem, Select, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { dummyValueTable } from "utils/dummy";
import { colors } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

interface IInputComp {
  value: ISelectItem[] | ISelectItem;
  handleChange: (e: any) => void;
  globalFilter?: string;
  setGlobalFilter?: React.Dispatch<React.SetStateAction<string>>;
}
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
    <Grid container gap={5}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: fontFamilies.poppins,
        }}
      >
        Search :
      </label>
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "0 15px", border: "1px solid rgba(0,0,0,.2)" }}
      />
    </Grid>
  );
}

export default function InputComp({
  value,
  handleChange,
  globalFilter,
  setGlobalFilter,
}: IInputComp) {
  return (
    <Wrapper container>
      <Grid container flexDirection="column" gap={5}>
        <Text variant="p">Show</Text>
        <Select
          defaultValue={value}
          items={dummyValueTable}
          onChange={handleChange}
        />
      </Grid>
      <Grid container gap={10}>
        <ButtonWrapper style={{ minWidth: "142px" }}>
          <StyledButton
            style={{ backgroundColor: colors.orange, color: colors.white }}
          >
            Export
          </StyledButton>
        </ButtonWrapper>
        {setGlobalFilter && (
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(String(e))}
            className="p-2 font-lg shadow border border-block"
            placeholder="Search all columns..."
          />
        )}
        {!setGlobalFilter && (
          <ButtonWrapper style={{ minWidth: "142px" }}>
            <StyledButton>Add employee</StyledButton>
          </ButtonWrapper>
        )}
      </Grid>
    </Wrapper>
  );
}
