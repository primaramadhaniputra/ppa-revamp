import { Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import JadwalInduksi from "./JadwalInduksi";
import { Container, DateText, InduksiContainer, Wrapper } from "./styles";
import TidakInduksi from "./TidakInduksi";
import TidakSesuaiJadwal from "./TidakSesuaiJadwal";
import TopFilter from "./TopFilter";
import TotalInduksi from "./TotalInduksi";

export default function Induksi() {

  return (
    <Wrapper>
      <Container>
        <Grid container flexDirection="column" gap={20} style={{ flex: 1 }} >
          <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Report / Induksi Monitoring</Text>
          <DateText variant="p">Current Date <span>25 / 7 / 2022</span></DateText>
        </Grid>
        <Grid style={{ flex: 1 }} >
          <TopFilter />
        </Grid>
      </Container>
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
