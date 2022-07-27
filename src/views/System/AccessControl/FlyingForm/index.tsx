import { Grid, Icon, Select, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { inputDropDownOperation } from "utils/dummy";
import {
  Container,
  HeaderTextContainer,
  InputContainer,
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
          <Text variant="h4">Update Form</Text>
          <Icon
            iconName="IcClose"
            style={{ cursor: "pointer" }}
            onClick={closeForm}
          />
        </HeaderTextContainer>
        <InputContainer>
          <Grid container gap={10} alignItems="center">
            <StyledLabel>NRP</StyledLabel>
            <Grid>
              <Styledinput />
            </Grid>
          </Grid>
          <Grid container gap={10} alignItems="center">
            <StyledLabel>Name</StyledLabel>
            <Grid>
              <Styledinput />
            </Grid>
          </Grid>
          <Grid container gap={10} alignItems="center">
            <StyledLabel>Dept</StyledLabel>
            <Grid>
              <Styledinput />
            </Grid>
          </Grid>
          <Grid container gap={10} alignItems="center">
            <StyledLabel>Position</StyledLabel>
            <Grid>
              <Styledinput />
            </Grid>
          </Grid>
          <Grid container gap={10} alignItems="center">
            <StyledLabel>Level</StyledLabel>
            <Grid>
              <Select items={inputDropDownOperation} />
            </Grid>
          </Grid>
        </InputContainer>
        <Grid >
          <StyledButton>Add</StyledButton>
        </Grid>
      </Container>
    </Wrapper>
  );
}
