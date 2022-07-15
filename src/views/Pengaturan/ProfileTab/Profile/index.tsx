import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import TitlePage from "atoms/TitlePage";
import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "services/users";
import { notify } from "utils/functions";
import { colors, fontSizing } from "utils/styles";
import { ButtonWrapper } from "../styles";
import { Wrapper } from "./styles";

export default function Profile() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    getProfile({ path: "profile" }).then((e) =>
      setUserName(e.data.data.fullName)
    );
  }, []);

  const handleFullNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUserName(e.target.value);
  };

  const handleSubmitUpdateProfile = async (e: {
    preventDefault: () => void;
  }) => {
    try {
      e.preventDefault();
      await axios.all([
        updateProfile({
          body: {
            fullName: userName,
          },
          path: "profile",
        }),
      ]);
      notify("Berhasil mengupdate profile", "success");
      return Router.reload();
    } catch (err: any) {
      return notify(err.message, "error");
    }
  };

  return (
    <Wrapper onSubmit={handleSubmitUpdateProfile}>
      <TitlePage
        type="h4"
        styles={{ margin: "30px 0 30px", fontSize: fontSizing.xl.fontSize }}
      >
        Profil
      </TitlePage>
      <LabeledInput
        name="Nama-lengkap"
        title="Nama Lengkap"
        style={{ backgroundColor: colors.blueSky }}
        value={userName}
        onChange={handleFullNameChange}
      />
      <ButtonWrapper>
        <StyledButton>Update Profile</StyledButton>
      </ButtonWrapper>
      <TitlePage
        type="h4"
        styles={{ fontSize: fontSizing.xl.fontSize, marginBottom: "30px" }}
      >
        Ubah Password
      </TitlePage>
    </Wrapper>
  );
}
