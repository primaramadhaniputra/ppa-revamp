import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { footer } from "utils/dummy";
import { fontSizing } from "utils/styles";
import { FooterText, Wrapper } from "./styles";

export default function Footer() {
  return (
    <Wrapper>
      <Grid container justifyContent="center" style={{ marginBottom: "20px" }}>
        <Image
          src="/images/footer.png"
          width={100}
          height={30}
          alt="ppa logo"
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        gap={15}
        style={{ padding: "0 10px" }}
      >
        {footer.map((item, index) => (
          <FooterText
            key={index}
            variant="p"
            style={{ color: item.color, fontSize: fontSizing.sm.fontSize }}
          >
            {item.title}
          </FooterText>
        ))}
      </Grid>
    </Wrapper>
  );
}
