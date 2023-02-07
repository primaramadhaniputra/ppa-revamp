import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { footer } from "utils/dummy";
import { fontSizing } from "utils/styles";
import { FooterText, Wrapper } from "./styles";

interface IProps {
	type?: string;
}

export default function Footer({ type }: IProps) {
	return (
		<Wrapper type={type}>
			<Grid
				container
				justifyContent="center"
				style={{ order: "1", marginBottom: type ? 0 : "20px" }}
			>
				<Image src="/images/footer.png" width={100} height={30} alt="ppa logo" quality={100} />
			</Grid>
			<Grid container justifyContent="center" gap={15} style={{ padding: "0 10px" }}>
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
