import { Grid } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import TitlePage from "atoms/TitlePage";
import React, { useEffect, useState } from "react";
import { getProfile } from "services/users";
import { fontSizing } from "utils/styles";
import { Wrapper } from "./styles";

export default function Profile() {
  const [users, setUsers] = useState({
    fullName: "",
    position: "",
    nrp: "",
  });
  useEffect(() => {
    getProfile({ path: "profile" }).then((e) => {
      const newData = {
        fullName: e.data.data.fullName,
        position: e.data.data.position,
        nrp: e.data.data.nrp,
      };
      return setUsers(newData);
    });
  }, []);

  return (
    <Wrapper>
      <TitlePage
        type="h4"
        styles={{ fontSize: fontSizing.xl.fontSize, marginBottom: "30px" }}
      >
        Profile
      </TitlePage>
      <Grid container flexDirection="column" gap={40}>
        <Grid container gap={20}>
          <Grid>
            <LabeledInput
              name="Nama"
              title="Nama"
              value={users.fullName}
              disabled={true}
            />
          </Grid>
          <Grid>
            <LabeledInput
              name="NRP"
              title="NRP"
              value={users.nrp}
              disabled={true}
            />
          </Grid>
        </Grid>
        <Grid container gap={20}>
          <Grid>
            <LabeledInput
              name="Jabatan"
              title="Jabatan"
              value={users.position}
              disabled={true}
            />
          </Grid>
          <Grid>
            <LabeledInput
              name="valid-mcu"
              title="Valid Mcu"
              value="1234567"
              disabled={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
