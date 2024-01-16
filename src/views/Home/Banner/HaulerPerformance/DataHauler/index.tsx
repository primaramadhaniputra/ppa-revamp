import { Grid } from "@hudoro/neron";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { Item, ItemContainer } from "../../styles";
import Image from "next/image";

export const HaulerPerformanceData = [
	{
		title: "Payload",
		plan: ["MTD", "- ton"],
		act: ["YTD", "- ton"],
		icon: "payload.png",
	},
	{
		title: "Empty Speed",
		plan: ["MTD", "- km/h"],
		act: ["YTD", "- km/h"],
		icon: "empty_speed.png",
	},
	{
		title: "Loaded Speed",
		plan: ["MTD", "- km/h"],
		act: ["YTD", "- km/h"],
		icon: "loaded_speed.png",
	},
	{
		title: "Distance",
		plan: ["MTD", "- km"],
		act: ["YTD", "- km"],
		icon: "distance.png",
	},
	{
		title: "EST",
		plan: ["MTD", "- min"],
		act: ["YTD", "- min"],
		icon: "est.png",
	},
	{
		title: "Fuel",
		plan: ["MTD", "- L/H"],
		act: ["YTD", "- L/H"],
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
								<p className="font-montserrat text-sm text-orange-400 font-medium">{data.title}</p>
								<Image
									src={`/icons/${data.icon}`}
									width={index === 1 ? 32 : 25}
									height={index === 1 ? 19 : 25}
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
