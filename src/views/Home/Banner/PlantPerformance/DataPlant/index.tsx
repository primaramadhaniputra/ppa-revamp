import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { PlanPerfromanceData } from "utils/dummy";
import { colors, fontSizing } from "utils/styles";
import { Item, ItemContainer } from "../../styles";

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
								<img src={`/icons/${data.icon}`} width={25} alt="ProductionPerfromance icon" />
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
