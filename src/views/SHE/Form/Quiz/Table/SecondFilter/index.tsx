import { Grid } from '@hudoro/neron'
import React from 'react'
import { TableTitle } from '../styles'
import { ButtonWrapper, ContainerPeriode, Wrapper, StyledInput } from './styles'

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
// table, handleChangeTotalShowData,
export default function SecondFilter({ globalFilter, setGlobalFilter }: IProps) {

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
               />
            </Grid>
         </Grid>
      );
   }

   return (
      <Wrapper >
         <ContainerPeriode>
            {/* <ShowDataTable value={{
               id: 0,
               values: `${table.getState().pagination.pageSize}`,
               label: `${table.getState().pagination.pageSize}`,
            }} handleChange={handleChangeTotalShowData} /> */}
            <TableTitle variant='h4'>Data list subject quiz</TableTitle>
         </ContainerPeriode>
         <ButtonWrapper>
            <DebouncedInput
               value={globalFilter ?? ""}
               onChange={(e) => setGlobalFilter(String(e))}
               className="p-2 font-lg shadow border border-block"
            />
         </ButtonWrapper>
      </Wrapper>
   )
}
