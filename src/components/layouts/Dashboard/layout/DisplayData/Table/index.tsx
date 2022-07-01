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
        cycle: number;
      }[]
    | undefined;
}

export default function TableData({ data }: IProps) {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Target</TH>
          <TH>PPA</TH>
          <TH>Komatsu</TH>
          <TH>Cycle</TH>
        </tr>
      </THead>
      <TBody>
        {data?.map((item, index) => (
          <tr key={index}>
            <TD>{item.target}</TD>
            <TD>{item.ppa}</TD>
            <TD>{item.komatsu}</TD>
            <TD>{item.cycle}</TD>
          </tr>
        ))}
      </TBody>
    </Table>
  );
}
