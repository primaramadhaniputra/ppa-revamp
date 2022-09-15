import Image from "next/image";
import React from "react";
import { Container, Wrapper } from "./styles";

interface IProps {
  onclick: () => void;
}

export default function FormImage({ onclick }: IProps) {
  return (
    <Wrapper onClick={onclick}>
      <Container>
        <Image
          src="/images/traktor2.jpeg"
          width={300}
          height={300}
          alt="image benefit claim voucher"
        />
      </Container>
    </Wrapper>
  );
}
