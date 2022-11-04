import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import LabelValue from "src/components/organism/LabelValue";
import { colors, fontSizing } from "utils/styles";
import { Item, ItemContainer } from "../../styles";
import { AchContainer, AchLabel, TabsAch, TabsAchContainer, TitleContainer } from "../styles";
import { ProductionPerfromanceData } from "utils/dummy";
import Image from "next/image";

const tabsObText = ["JS", "TC"];

const DataProduction = () => {
	const [activeTabOb, setActiveTabOb] = useState(0);

	const handleActiveOb = (no: number) => {
		setActiveTabOb(no);
	};

	return (
		<ItemContainer>
			{ProductionPerfromanceData.map((data, index) => {
				return (
					<Item key={index}>
						<Grid container flexDirection="column" gap={20}>
							<Grid container justifyContent="space-between" alignItems="center">
								<TitleContainer>
									<TitlePage
										styles={{
											color: colors.orange,
											fontSize: fontSizing.sm.fontSize,
										}}
										type="h4"
									>
										{data.title}
									</TitlePage>
									{data.title === "OB" && (
										<TabsAchContainer>
											{tabsObText.map((item, number) => {
												return (
													<TabsAch
														key={number}
														style={{
															backgroundColor: activeTabOb === number ? colors.orange : "inherit",
															color: activeTabOb === number ? "white" : "",
														}}
														onClick={() => handleActiveOb(number)}
													>
														{item}
													</TabsAch>
												);
											})}
										</TabsAchContainer>
									)}
								</TitleContainer>
								<AchContainer>
									{data.ach && <AchLabel>{data.ach}</AchLabel>}
									<Image
										src={`/icons/${data.icon}`}
										width={25}
										height={25}
										alt="ProductionPerfromance icon"
										quality={100}
									/>
								</AchContainer>
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

export default DataProduction;
