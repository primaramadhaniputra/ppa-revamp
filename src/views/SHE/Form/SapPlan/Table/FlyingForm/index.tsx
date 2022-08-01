import { Grid, Icon, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import {
  Container,
  HeaderTextContainer,
  InputContainer,
  InputWrapper,
  SingleInputContainer,
  Styledinput,
  StyledLabel,
  Wrapper,
} from "./styles";

interface IProps {
  closeForm: () => void;
  isEdit?: boolean;
}

export default function FlyingForm({ closeForm, isEdit }: IProps) {
  return (
    <Wrapper
      style={{ opacity: isEdit ? "1" : "0", zIndex: isEdit ? "999" : "-999" }}
    >
      <Container
        style={{ transform: isEdit ? "translateY(0)" : "translateY(-15%)" }}
      >
        <HeaderTextContainer>
          <Text variant="h4">Update SAP Plan</Text>
          <Icon
            iconName="IcClose"
            style={{ cursor: "pointer" }}
            onClick={closeForm}
          />
        </HeaderTextContainer>
        <InputContainer>
          <SingleInputContainer>
            <StyledLabel>NRP</StyledLabel>
            <Grid >
              <Styledinput />
            </Grid>
          </SingleInputContainer>
          <InputWrapper>
            <SingleInputContainer >
              <StyledLabel>Bulan</StyledLabel>
              <Grid>
                <Styledinput />
              </Grid>
            </SingleInputContainer>
            <SingleInputContainer>
              <StyledLabel>Tahun</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
          </InputWrapper>
          <InputWrapper>
            <SingleInputContainer>
              <StyledLabel>KTA</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
            <SingleInputContainer>
              <StyledLabel>TTA</StyledLabel>
              <Grid>
                <Styledinput />
              </Grid>
            </SingleInputContainer>
          </InputWrapper>
          <InputWrapper>
            <SingleInputContainer>
              <StyledLabel>Inspeksi</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
            <SingleInputContainer>
              <StyledLabel>Observasi</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
          </InputWrapper>
          <InputWrapper>
            <SingleInputContainer>
              <StyledLabel>P.KRITIS</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
            <SingleInputContainer>
              <StyledLabel>WAKE UP CALL</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
          </InputWrapper>
          <InputWrapper>
            <SingleInputContainer>
              <StyledLabel>S.MEETING</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
            <SingleInputContainer>
              <StyledLabel>CHOACING</StyledLabel>
              <Grid >
                <Styledinput />
              </Grid>
            </SingleInputContainer>
          </InputWrapper>
        </InputContainer>
        <Grid >
          <StyledButton>Update</StyledButton>
        </Grid>
      </Container>
    </Wrapper>
  );
}
