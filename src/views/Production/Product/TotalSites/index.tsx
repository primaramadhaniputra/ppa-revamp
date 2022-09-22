import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { numberWithCommas } from "utils/functions";
import { ITotalAllSites } from "utils/interfaces";
import { ProductText, ProductTitle } from "../styles";
import { Lozenge, SingleProduct, Title, Wrapper, WrapperProduct } from "./styles";

interface IProps {
	totalDataSites: ITotalAllSites;
}

const iconUrl = ["CheckCircle.png", "coal.png", "coal.png"];
const gridArea = ["ob", "coal", "ore"];

export default function TotalSites({ totalDataSites }: IProps) {
	const obj = totalDataSites ? Object.entries(totalDataSites) : [];
	return (
		<Wrapper>
			<Grid style={{ marginBottom: "31px" }} container alignItems="center" gap={15}>
				<ProductTitle style={{ marginTop: "0" }}>Total All Sites</ProductTitle>
				<Image src="/logo/production2.png" width={37} height={37} alt="ppa logo" />
			</Grid>
			<WrapperProduct>
				{obj.map((item, index) => (
					<SingleProduct style={{ gridArea: gridArea[index] }}>
						<Grid container alignItems="center" gap={10}>
							<Image src={`/icons/${iconUrl[index]}`} width={28} height={28} alt="circle logo" />
							<Title>{item[0]} Kbcm</Title>
						</Grid>
						<Lozenge>{item[1].percent.toFixed(2)}%</Lozenge>
						<Grid container justifyContent="space-between" style={{ marginBottom: "20px" }}>
							<Grid container gap={5}>
								<Image
									src="/icons/Ic-Target.png"
									height={16}
									width={16}
									alt="product logo"
									quality={100}
								/>
								<ProductText>P</ProductText>
							</Grid>
							<ProductText>{numberWithCommas(item[1].plan)}</ProductText>
						</Grid>
						<Grid container justifyContent="space-between">
							<Grid container gap={5}>
								<Image
									src="/icons/Ic-Trophy.png"
									height={20.5}
									width={16}
									alt="product logo"
									quality={100}
								/>
								<ProductText>A</ProductText>
							</Grid>
							<ProductText>{numberWithCommas(item[1].production)}</ProductText>
						</Grid>
					</SingleProduct>
				))}
			</WrapperProduct>
		</Wrapper>
	);
}
