import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import ShowDataTable from 'molecules/ShowDataTable'
import React from 'react'
import { colors, fontSizing, fontWeights } from 'utils/styles'
import { ButtonWrapper, ContainerPeriode, StyledText, Wrapper, StyledInput } from './styles'

interface IProps {
   handleChangeTotalShowData: (e: {
      target: {
         value: number;
      };
   }) => void
   globalFilter: string;
   setGlobalFilter: React.Dispatch<React.SetStateAction<string>>
   [x: string]: any;

}

export default function SecondFilter({ table, handleChangeTotalShowData, globalFilter, setGlobalFilter }: IProps) {

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
         <Grid container gap={5} alignItems="center">
            <Grid>
               <StyledInput
                  {...props}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search..."
                  style={{ minWidth: '150px' }}
               />
            </Grid>
         </Grid>
      );
   }

   return (
      <Wrapper >
         <ContainerPeriode>
            <ShowDataTable value={{
               id: 0,
               values: `${table.getState().pagination.pageSize}`,
               label: `${table.getState().pagination.pageSize}`,
            }} handleChange={handleChangeTotalShowData} />
            <StyledText >Periode : <span>2022-17-10 - 2022-17-10</span></StyledText>
            <StyledText >Dept : <span>ALL</span></StyledText>
         </ContainerPeriode>
         <ButtonWrapper>
            <StyledButton
               style={{
                  backgroundColor: '#25B78A',
                  color: colors.white,
                  padding: "2px 15px",
                  fontWeight: fontWeights.bold,
                  borderRadius: "2px",
                  fontSize: fontSizing.lg.fontSize,
               }}
            >
               EXPORT XLS
            </StyledButton>
            <DebouncedInput
               value={globalFilter ?? ""}
               onChange={(e) => setGlobalFilter(String(e))}
               className="p-2 font-lg shadow border border-block"
            />
         </ButtonWrapper>
      </Wrapper>
   )
}
