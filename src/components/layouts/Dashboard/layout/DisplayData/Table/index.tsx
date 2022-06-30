import React from "react";
import { THead, Table, TH, TBody, TD } from "./styles";

interface IProps {
  data:
    | {
        label: string;
        value: string;
        target: number;
        ppa: number;
        komatsu: number;
      }[]
    | undefined;
}

export default function TableData({ data }: IProps) {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Label</TH>
          <TH>Value</TH>
          <TH>Target</TH>
          <TH>PPA</TH>
          <TH>Komatsu</TH>
        </tr>
      </THead>
      <TBody>
        {data?.map((item, index) => (
          <tr key={index}>
            <TD>{item.label}</TD>
            <TD>{item.value}</TD>
            <TD>{item.target}</TD>
            <TD>{item.ppa}</TD>
            <TD>{item.komatsu}</TD>
          </tr>
        ))}
      </TBody>
    </Table>
  );
}
