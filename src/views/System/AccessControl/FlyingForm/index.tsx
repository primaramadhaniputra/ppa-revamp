import { Grid, Icon, ISelectItem, Select, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { EditUserLevel } from "services/webAdmin";
import { notify } from "utils/functions";
import { ISingleUser } from "utils/interfaces";
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
  dataUser: ISingleUser | undefined;
  formPosition: number;
}

const levelData = [
  {
    id: 0,
    values: "MAIN",
    label: "MAIN",
  },
  {
    id: 1,
    values: "GL",
    label: "GL",
  },
  {
    id: 2,
    values: "SH",
    label: "SH",
  },
  {
    id: 3,
    values: "DH",
    label: "DH",
  },
  {
    id: 4,
    values: "AD",
    label: "AD",
  },
  {
    id: 5,
    values: "SM",
    label: "SM",
  },
];

export default function FlyingForm({
  closeForm,
  isEdit,
  dataUser,
  formPosition,
}: IProps) {
  const router = useRouter();

  const [userLevel, setUserLevel] = useState<undefined | string>(undefined);

  const onChangeSelectLevel = (e: ISelectItem) => {
    setUserLevel(e.values);
  };
  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault();
      await EditUserLevel({
        body: {
          level: userLevel,
        },
        path: `${dataUser?.Id}`,
      });
      notify("Berhasil merubah user level", "success");
      router.reload();
    } catch (error: any) {
      return notify(error.message, "error");
    }
  };
  return (
    <Wrapper
      style={{
        opacity: isEdit ? "1" : "0",
        zIndex: isEdit ? "999" : "-999",
        top: `${formPosition}px`,
      }}
    >
      <Container
        style={{ transform: isEdit ? "translateY(0)" : "translateY(-15%)" }}
        onSubmit={handleSubmit}
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
          <Grid
            container
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledLabel>NRP</StyledLabel>
            <Grid style={{ maxWidth: 400 }}>
              <Styledinput
                disabled={true}
                value={dataUser?.NRP}
                onChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid
            container
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledLabel>Name</StyledLabel>
            <Grid style={{ maxWidth: 400 }}>
              <Styledinput
                disabled={true}
                value={dataUser?.Name}
                onChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid
            container
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledLabel>Dept</StyledLabel>
            <Grid style={{ maxWidth: 400 }}>
              <Styledinput
                disabled={true}
                value={dataUser?.Dept}
                onChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid
            container
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledLabel>Position</StyledLabel>
            <Grid style={{ maxWidth: 400 }}>
              <Styledinput
                disabled={true}
                value={dataUser?.Position}
                onChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid
            container
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledLabel>Level</StyledLabel>
            <Grid style={{ maxWidth: 400 }}>
              <Select items={levelData} onChange={onChangeSelectLevel as any} />
            </Grid>
          </Grid>
        </InputContainer>
        <Grid>
          <StyledButton>Add</StyledButton>
        </Grid>
      </Container>
    </Wrapper>
  );
}
