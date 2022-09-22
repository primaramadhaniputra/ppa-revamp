import { Grid, Icon } from "@hudoro/neron";
import Image from "next/image";
import React, { useState } from "react";
import { numberWithCommas, useWindowSize } from "utils/functions";
import { allSites } from "utils/interfaces";
import { fontWeights } from "utils/styles";
import ChartDetail from "views/Production/Product/Sites/ChartDetail";
import { HeaderContainer, ProductText, SingleProduct, SpanHeader, Wrapper } from "../styles";
import { Chart, ChartWrapper } from "./styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";

interface IProps {
	sites: allSites[];
}

const logoUrl = [
	"bibLogo.png",
	"mhuLogo.png",
	"abpLogo.png",
	"kjbLogo.png",
	"sksLogo.png",
	"baLogo.png",
	"mipLogo.png",
	"mipLogo.png",
	"mlpLogo.png",
	"hsmLogo.png",
];

export default function Sites({ sites }: IProps) {
	const [isShowChart, setisShowChart] = useState(false);
	const [formPosition, setformPosition] = useState(0);
	const { width } = useWindowSize();

	const showChart = (e: { pageY: number; clientY: number }) => {
		setformPosition(e.pageY - e.clientY);
		setisShowChart(true);
	};

	const closeChart = () => {
		setisShowChart(false);
		setformPosition(0);
	};

	isShowChart
		? disableBodyScroll(Html as unknown as HTMLElement | Element)
		: enableBodyScroll(Html as unknown as HTMLElement | Element);
	return (
		<>
			<ChartWrapper
				style={{
					top: `${formPosition}px`,
					zIndex: isShowChart ? 99 : -10,
					opacity: isShowChart ? 1 : ".3",
				}}
			>
				<Chart style={{ transform: isShowChart ? "translateY(100px)" : "translateY(0)" }}>
					<Grid container justifyContent="flex-end">
						<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={closeChart} />
					</Grid>
					<ChartDetail />
				</Chart>
			</ChartWrapper>
			<Wrapper>
				{sites &&
					sites.map((item, index) => {
						return (
							<SingleProduct onClick={showChart} key={index}>
								<HeaderContainer>
									<Grid container flexDirection="column" gap={13} style={{ flex: 1.5 }}>
										<ProductText variant="header" style={{ fontWeight: fontWeights.medium }}>
											OB kbcm{" "}
											<SpanHeader style={{ backgroundColor: "#47BF34" }}>
												{item.data[0].percent.toFixed(2)}%
											</SpanHeader>
										</ProductText>
										<Grid container flexDirection="column" gap={10}>
											<Grid container justifyContent="space-between">
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
												<ProductText>{numberWithCommas(item.data[0].plan as number)}</ProductText>
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
													{numberWithCommas(item.data[0].production as number)}
												</ProductText>
											</Grid>
										</Grid>
									</Grid>
									<Grid container alignItems="center" flexDirection="column" style={{ flex: 1 }}>
										<Image
											src={`/logo/${logoUrl[index]}`}
											height={width > 350 ? 37 : 20}
											width={width > 350 ? 37 : 20}
											alt="product logo"
											quality={100}
										/>
										<Grid container style={{ flex: 1 }} justifyContent="center" alignItems="center">
											<ProductText>{item.siteName}</ProductText>
										</Grid>
									</Grid>
									<Grid container flexDirection="column" gap={13} style={{ flex: 1.5 }}>
										<ProductText variant="header" style={{ fontWeight: fontWeights.medium }}>
											{item.data[1].name} kton
											<SpanHeader style={{ backgroundColor: "#EB3B3B" }}>
												{item.data[0].percent.toFixed(2)}%
											</SpanHeader>
										</ProductText>
										<Grid container flexDirection="column" gap={10}>
											<Grid container justifyContent="space-between">
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
												<ProductText>{numberWithCommas(item.data[1].plan as number)}</ProductText>
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
													{numberWithCommas(item.data[1].production as number)}
												</ProductText>
											</Grid>
										</Grid>
									</Grid>
								</HeaderContainer>
							</SingleProduct>
						);
					})}
			</Wrapper>
		</>
	);
}
