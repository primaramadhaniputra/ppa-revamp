import { Grid, ISelectItem, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, LabelSearch, NumberInput, Wrapper } from "./styles";

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
      <LabelSearch>Search :</LabelSearch>
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
      <Grid container alignItems="center" gap={5}>
        <Text variant="p">Show</Text>
        <NumberInput
          value={parseInt(value.values, 10)}
          onChange={handleChange}
        />
        <Text variant="p">entries</Text>
      </Grid>
      <Grid container gap={30}>
        <ButtonWrapper style={{ minWidth: "142px" }}>
          <StyledButton
            style={{
              backgroundColor: colors.orange,
              color: colors.white,
              padding: "5px",
              fontWeight: fontWeights.bold,
            }}
          >
            EXPORT
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
