import { fontFamilies, Grid, ISelectItem, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { colors, fontSizing, fontWeights } from "utils/styles";
import {
  ButtonWrapper,
  LabelSearch,
  NumberInput,
  StyledInput,
  Wrapper,
} from "./styles";

interface IInputComp {
  value: ISelectItem[] | ISelectItem;
  handleChange: (e: any) => void;
  globalFilter?: string;
  setGlobalFilter?: React.Dispatch<React.SetStateAction<string>>;
  noButton: boolean | undefined;
  noSearch: boolean | undefined;
  buttonColor?: string;
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
      <Grid>
        <StyledInput
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

export default function InputComp({
  value,
  handleChange,
  globalFilter,
  setGlobalFilter,
  noButton,
  noSearch,
  buttonColor,
}: IInputComp) {
  return (
    <Wrapper container alignItems="center">
      <Grid container alignItems="center" gap={5}>
        <Text variant="p" style={{ fontFamily: fontFamilies.poppins }}>
          Show
        </Text>
        <Grid>
          <NumberInput
            value={parseInt(value.values, 10)}
            onChange={handleChange}
          />
        </Grid>
        <Text variant="p" style={{ fontFamily: fontFamilies.poppins }}>
          entries
        </Text>
      </Grid>
      <Grid container gap={30}>
        {!noButton && (
          <ButtonWrapper style={{ minWidth: "142px" }}>
            <StyledButton
              style={{
                backgroundColor: buttonColor || colors.orange,
                color: colors.white,
                padding: "2px",
                fontWeight: fontWeights.bold,
                borderRadius: "2px",
                fontSize: fontSizing.lg.fontSize,
              }}
            >
              EXPORT
            </StyledButton>
          </ButtonWrapper>
        )}
        {setGlobalFilter && !noSearch && (
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(String(e))}
            className="p-2 font-lg shadow border border-block"
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
