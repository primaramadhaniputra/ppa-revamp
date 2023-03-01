import { Grid, Icon } from "@hudoro/neron";
import { useState } from "react";
import { IProductionSites } from "utils/interfaces";
import ChartDetail from "views/Production/Product/Sites/ChartDetail";
import { ProductTitle, Wrapper } from "../styles";
import CardSite from "./SiteCard";
import { Chart, ChartWrapper } from "./styles";

interface IProps {
	sites: IProductionSites[];
}

export default function Sites({ sites }: IProps) {
	const [isShowChart, setisShowChart] = useState(false);
	const [formPosition, setformPosition] = useState(0);

	const showChart = (e: { pageY: number; clientY: number }) => {
		setformPosition(e.pageY - e.clientY);
		setisShowChart(true);
	};

	const closeChart = () => {
		setisShowChart(false);
		setformPosition(0);
	};
	console.log("sites", sites);
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
			<ProductTitle>Sites</ProductTitle>
			<Wrapper>
				{sites &&
					sites.map((item, index) => {
						return <CardSite key={index} item={item} showChart={showChart} />;
					})}
			</Wrapper>
		</>
	);
}
