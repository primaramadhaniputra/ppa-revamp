import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { ITotalAllSites } from "utils/interfaces";
import { ProductText, ProductTitle } from "../styles";
import { Lozenge, SingleProduct, Title, Wrapper, WrapperProduct } from "./styles";

interface IProps {
	totalDataSites: ITotalAllSites;
}

export default function TotalSites({ totalDataSites }: IProps) {
	return (
		<Wrapper>
			<Grid style={{ marginBottom: "31px" }} container alignItems="center" gap={15}>
				<ProductTitle style={{ marginTop: "0" }}>Total All Sites</ProductTitle>
				<Image src="/logo/production2.png" width={37} height={37} alt="ppa logo" />
			</Grid>
			<WrapperProduct>
				<SingleProduct style={{ gridArea: "ob" }}>
					<Grid container alignItems="center" gap={10}>
						<Image src="/icons/CheckCircle.png" width={28} height={28} alt="circle logo" />
						<Title>OB Kbcm</Title>
					</Grid>
					<Lozenge>{totalDataSites ? totalDataSites["overBurden"].percent : 0}%</Lozenge>
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
						<ProductText>{totalDataSites ? totalDataSites["overBurden"].plan : 0}</ProductText>
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
						<ProductText>
							{totalDataSites ? totalDataSites["overBurden"].production : 0}
						</ProductText>
					</Grid>
				</SingleProduct>
				<SingleProduct style={{ gridArea: "coal" }}>
					<Grid container alignItems="center" gap={10}>
						<Image src="/icons/coal.png" width={28} height={28} alt="circle logo" />
						<Title>COAL Kton</Title>
					</Grid>
					<Lozenge style={{ backgroundColor: "#EB3B3B" }}>
						{totalDataSites ? totalDataSites["coal"].percent : 0}%
					</Lozenge>
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
						<ProductText>{totalDataSites ? totalDataSites["coal"].plan : 0}</ProductText>
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
						<ProductText>{totalDataSites ? totalDataSites["coal"].production : 0}</ProductText>
					</Grid>
				</SingleProduct>
				<SingleProduct style={{ gridArea: "ore" }}>
					<Grid container alignItems="center" gap={10}>
						<Image src="/icons/coal.png" width={28} height={28} alt="circle logo" />
						<Title>ORE Kton</Title>
					</Grid>
					<Lozenge style={{ backgroundColor: "#EB3B3B" }}>
						{totalDataSites ? totalDataSites["ore"].percent : 0}%
					</Lozenge>
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
						<ProductText>{totalDataSites ? totalDataSites["ore"].plan : 0}</ProductText>
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
						<ProductText>{totalDataSites ? totalDataSites["ore"].production : 0}</ProductText>
					</Grid>
				</SingleProduct>
			</WrapperProduct>
		</Wrapper>
	);
}
