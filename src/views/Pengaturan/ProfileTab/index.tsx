import React from "react";
import ChangePassword from "./ChangePassword";
import Profile from "./Profile";
import { Wrapper } from "./styles";

export default function ProfileTab() {
  return (
    <Wrapper>
      <Profile />
      <ChangePassword />
    </Wrapper>
  );
}
