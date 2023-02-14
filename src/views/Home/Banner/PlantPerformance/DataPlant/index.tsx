import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Image from "next/image";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { colors, fontSizing } from "utils/styles";
import { Item, ItemContainer } from "../../styles";

export const PlanPerfromanceData = [
	{
		title: "PA",
		plan: ["Plan", "** %"],
		act: ["Act", "** %"],
		icon: "pa.png",
	},
	{
		title: "UA",
		plan: ["Plan", "** %"],
		act: ["Act", "** %"],
		icon: "ua.png",
	},
	{
		title: "MTBF",
		plan: ["Plan", "** %"],
		act: ["Act", "** %"],
		icon: "MTBF.png",
	},
	{
		title: "MTTR",
		plan: ["Plan", "** %"],
		act: ["Act", "** %"],
		icon: "MTTR.png",
	},
];

const DataPlant = () => {
	return (
		<ItemContainer>
			{PlanPerfromanceData.map((data, index) => {
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

export default DataPlant;
