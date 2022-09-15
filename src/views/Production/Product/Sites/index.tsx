import { Grid, Icon } from "@hudoro/neron";
import Image from "next/image";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { allSites } from "utils/interfaces";
import { fontWeights } from "utils/styles";
import ProductionDetail from "views/Production/Detail";
import { HeaderContainer, ProductText, SingleProduct, SpanHeader, Wrapper } from "../styles";
import { Chart, ChartWrapper } from "./styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";

interface IProps {
	sites: allSites[];
}

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
			{isShowChart && (
				<ChartWrapper style={{ top: `${formPosition}px` }}>
					<Chart>
						<Grid container justifyContent="flex-end">
							<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={closeChart} />
						</Grid>
						<ProductionDetail />
					</Chart>
				</ChartWrapper>
			)}
			<Wrapper>
				{sites &&
					sites.map((item, index) => {
						console.log(item);
						return (
							<SingleProduct onClick={showChart} key={index}>
								<HeaderContainer>
									<Grid container flexDirection="column" gap={13} style={{ flex: 1.5 }}>
										<ProductText variant="header" style={{ fontWeight: fontWeights.medium }}>
											OB kbcm <SpanHeader style={{ backgroundColor: "#47BF34" }}>(105%)</SpanHeader>
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
												<ProductText>{item.data[0].plan || 0}</ProductText>
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
												<ProductText>{item.data[0].production || 0}</ProductText>
											</Grid>
										</Grid>
									</Grid>
									<Grid container alignItems="center" flexDirection="column" style={{ flex: 1 }}>
										<Image
											src="/logo/production4.png"
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
											Coal kton{" "}
											<SpanHeader style={{ backgroundColor: "#EB3B3B" }}>(105%)</SpanHeader>
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
												<ProductText>{item.data[2].plan || 0}</ProductText>
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
												<ProductText>{item.data[2].production || 0}</ProductText>
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
