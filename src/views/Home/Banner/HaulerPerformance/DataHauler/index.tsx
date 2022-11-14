import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { colors, fontSizing } from "utils/styles";
import { Item, ItemContainer } from "../../styles";
import Image from "next/image";

export const HaulerPerformanceData = [
	{
		title: "Payload",
		plan: ["MTD", "95.3 ton"],
		act: ["YTD", "95.3 ton"],
		icon: "payload.png",
	},
	{
		title: "Empty Speed",
		plan: ["MTD", "22.6 km/h"],
		act: ["YTD", "22.6 km/h"],
		icon: "empty_speed.png",
	},
	{
		title: "Loaded Speed",
		plan: ["MTD", "20.7 km/h"],
		act: ["YTD", "20.7 km/h"],
		icon: "loaded_speed.png",
	},
	{
		title: "Distance",
		plan: ["MTD", "2.7 km"],
		act: ["YTD", "2.7 km"],
		icon: "distance.png",
	},
	{
		title: "EST",
		plan: ["MTD", "1.5 min"],
		act: ["YTD", "1.5 min"],
		icon: "est.png",
	},
	{
		title: "Fuel",
		plan: ["MTD", "75.1 L/H"],
		act: ["YTD", "75.1 L/H"],
		icon: "fuel.png",
	},
];

const DataHauler = () => {
	return (
		<ItemContainer>
			{HaulerPerformanceData.map((data, index) => {
				return (
					<Item key={index}>
						<Grid container flexDirection="column" gap={20}>
							<Grid container justifyContent="space-between" alignItems="center">
								<TitlePage
									styles={{
										color: colors.orange,
										fontSize: fontSizing.sm.fontSize,
									}}
									type="h4"
								>
									{data.title}
								</TitlePage>
								<Image
									src={`/icons/${data.icon}`}
									width={25}
									height={25}
									alt="ProductionPerfromance icon"
									quality={100}
								/>
							</Grid>
							<Grid container flexDirection="column" gap={15}>
								<LabelValue data={data.plan} />
								<LabelValue data={data.act} />
							</Grid>
						</Grid>
					</Item>
				);
			})}
		</ItemContainer>
	);
};

export default DataHauler;
