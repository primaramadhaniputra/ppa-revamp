import { Grid } from "@hudoro/neron";
import Image from "next/image";
import { useWindowSize } from "utils/customHooks";
import { numberWithCommas } from "utils/functions";
import { IProductionSites } from "utils/interfaces";
import { fontWeights } from "utils/styles";
import { HeaderContainer, ProductText, SingleProduct, SpanHeader } from "../../styles";

interface IProps {
	item: IProductionSites;
	showChart: (e: { pageY: number; clientY: number }) => void;
}

const getPercentage = (x: number, y: number) => {
	if ((x / y).toString() === "Infinity") return 100;
	if (x === 0 && y === 0) return 0.0;
	return ((x / y) * 100).toFixed(2);
};

export default function CardSite({ item, showChart }: IProps) {
	const { width } = useWindowSize();
	return (
		<SingleProduct onClick={showChart}>
			<HeaderContainer>
				<Grid container flexDirection="column" gap={13} style={{ flex: 1.5 }}>
					<ProductText variant="header" style={{ fontWeight: fontWeights.medium }}>
						{item.data.pit.material}/{item.data.pit.satuan.toLowerCase()}
						{/* #EB3B3B */}
						<SpanHeader
							style={{
								backgroundColor:
									(getPercentage(item.data.pit.actual, item.data.pit.plan) as number) >= 100
										? "#47BF34"
										: "#EB3B3B",
							}}
						>
							{getPercentage(item.data.pit.actual, item.data.pit.plan)}%
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
							<ProductText>{numberWithCommas(item.data.pit.plan)}</ProductText>
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
							<ProductText>{numberWithCommas(item.data.pit.actual)}</ProductText>
						</Grid>
					</Grid>
				</Grid>
				<Grid container alignItems="center" flexDirection="column" style={{ flex: 1 }}>
					<Image
						loader={() => item.logo}
						src={item.logo}
						height={width > 350 ? 37 : 20}
						width={width > 350 ? 37 : 20}
						alt="product logo"
						quality={100}
					/>
					<Grid container style={{ flex: 1 }} justifyContent="center" alignItems="center">
						<ProductText>{item.site}</ProductText>
					</Grid>
				</Grid>
				<Grid container flexDirection="column" gap={13} style={{ flex: 1.5 }}>
					<ProductText variant="header" style={{ fontWeight: fontWeights.medium }}>
						{item.data.hauling.material}/{item.data.hauling.satuan.toLowerCase()}
						<SpanHeader
							style={{
								backgroundColor:
									(getPercentage(item.data.hauling.actual, item.data.hauling.plan) as number) >= 100
										? "#47BF34"
										: "#EB3B3B",
							}}
						>
							{getPercentage(item.data.hauling.actual, item.data.hauling.plan)}%
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
							<ProductText>{numberWithCommas(item.data.hauling.plan)}</ProductText>
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
							<ProductText>{numberWithCommas(item.data.hauling.actual)}</ProductText>
						</Grid>
					</Grid>
				</Grid>
			</HeaderContainer>
		</SingleProduct>
	);
}
