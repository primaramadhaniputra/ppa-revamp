import { Grid } from "@hudoro/neron";
import Image from "next/image";
import { numberWithCommas } from "utils/functions";
import { IProductionSites } from "utils/interfaces";
import { ProductText, ProductTitle } from "../styles";
import { Lozenge, SingleProduct, Title, Wrapper, WrapperProduct } from "./styles";

interface IProps {
	sites: IProductionSites[];
}

const iconUrl = ["CheckCircle.png", "coal.png", "coal.png"];
const gridArea = ["ob", "coal", "ore"];

const getPercentage = (x: number, y: number) => {
	if (x === 0 && y === 0) return "0%";
	const percent = ((x / y) * 100).toFixed(2);
	return (
		<Lozenge style={{ backgroundColor: Number(percent) < 100 ? "#EB3B3B" : "#47bf34" }}>
			{percent}%
		</Lozenge>
	);
};

export default function TotalSites({ sites }: IProps) {
	const newSite = sites
		.map((item) => item.data)
		.reduce(
			(acc, curr) => {
				const pitPlan = curr.pit.plan;
				const pitActual = curr.pit.actual;
				acc.map((item) => {
					if (item.name === "OB") {
						return { ...item, plan: (item.plan += pitPlan), actual: (item.actual += pitActual) };
					} else if (item.name === "Coal" && curr.hauling.material === "Coal") {
						return {
							...item,
							plan: (item.plan += curr.hauling.plan),
							actual: (item.actual += curr.hauling.actual),
						};
					} else if (item.name === "Ore" && curr.hauling.material === "Ore") {
						return {
							...item,
							plan: (item.plan += curr.hauling.plan),
							actual: (item.actual += curr.hauling.actual),
						};
					}
				});
				return acc;
			},
			[
				{ name: "OB", satuan: "bcm", plan: 0, actual: 0 },
				{ name: "Coal", satuan: "ton", plan: 0, actual: 0 },
				{ name: "Ore", satuan: "ton", plan: 0, actual: 0 },
			],
		);

	return (
		<Wrapper>
			<Grid style={{ marginBottom: "31px" }} container alignItems="center" gap={15}>
				<ProductTitle style={{ marginTop: "0" }}>Total All Sites</ProductTitle>
				<Image src="/logo/production2.png" width={37} height={37} alt="ppa logo" />
			</Grid>
			<WrapperProduct>
				{newSite?.map((item, index) => (
					<SingleProduct style={{ gridArea: gridArea[index] }}>
						<Grid container alignItems="center" gap={10}>
							<Image src={`/icons/${iconUrl[index]}`} width={28} height={28} alt="circle logo" />
							<Title>
								{item.name}/{item.satuan}
							</Title>
						</Grid>
						{getPercentage(item.actual, item.plan)}
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
							<ProductText>{numberWithCommas(Number(item.plan.toFixed(2)))}</ProductText>
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
							<ProductText>{numberWithCommas(Number(item.actual.toFixed(6)))}</ProductText>
						</Grid>
					</SingleProduct>
				))}
			</WrapperProduct>
		</Wrapper>
	);
}
