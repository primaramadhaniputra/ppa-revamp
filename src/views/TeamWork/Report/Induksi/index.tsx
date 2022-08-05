import React from "react";
import JadwalInduksi from "./JadwalInduksi";
import { InduksiContainer, TitleText, Wrapper, WrapperTitle } from "./styles";
import TidakInduksi from "./TidakInduksi";
import TidakSesuaiJadwal from "./TidakSesuaiJadwal";
import TopFilter from "./TopFilter";
import TotalInduksi from "./TotalInduksi";

export default function Induksi() {

  return (
    <Wrapper>
      <WrapperTitle>
        <TitleText >Induksi Monitoring</TitleText>
        <TopFilter />
      </WrapperTitle>
      <InduksiContainer >
        <JadwalInduksi />
        <TotalInduksi />
      </InduksiContainer>
      <InduksiContainer style={{ marginTop: '30px' }}>
        <TidakInduksi />
        <TidakSesuaiJadwal />
      </InduksiContainer>
    </Wrapper >
  );
}
