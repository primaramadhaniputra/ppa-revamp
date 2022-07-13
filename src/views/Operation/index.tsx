import React from 'react'
import { IDropdownData } from 'utils/interfaces';
import renderContent from './renderContent';
interface IProps {
   defaultValue: IDropdownData
   data: IDropdownData[]
   queryName: string
}
export default function Operation({ data, defaultValue, queryName }: IProps) {
   return (
      <>
         {renderContent(queryName, data, defaultValue)}
      </>
   )
}
