import { Card, Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { IconContainer, IconText, ImageContainer } from "../styles";
import DataDetail from "./DataDetail";

const data = [
	{
		title: "Turn Over",
		unit: "699",
		border: "2px solid #F89F5F",
		icon: "url(/icons/1.png)",
	},
	{
		title: "Check In",
		unit: "699",
		border: "2px solid #016CE2",
		icon: "url(/icons/2.png)",
	},
	{
		title: "P2H",
		unit: "699",
		border: "2px solid #451394",
		icon: "url(/icons/3.png)",
	},
	{
		title: "Need P2H",
		unit: "699",
		border: "2px solid #E82A35",
		icon: "url(/icons/4.png)",
	},
	{
		title: "Need Approved",
		unit: "699",
		border: "2px solid #6FB43F",
		icon: "url(/icons/5.png)",
	},
	{
		title: "Approved",
		unit: "699",
		border: "2px solid #F49E00",
		icon: "url(/icons/6.png)",
	},
];

const CardImage = () => {
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<IconContainer>
				{data.map((item, index) => (
					<Grid key={index} style={{ cursor: "pointer" }} onClick={handleShowDetail}>
						<Card
							style={{
								boxShadow: "0px 1px 3px rgba(0, 0, 0, .15)",
								width: "100%",
								borderBottom: item.border,
								padding: "10px 20px",
							}}
						>
							<Grid container gap={20} justifyContent="space-between">
								<Grid container flexDirection="column" gap={10}>
									<IconText>{item.title}</IconText>
									<Text variant="h4" style={{ fontWeight: fontWeights.bold }}>
										{item.unit} Unit
									</Text>
								</Grid>
								<ImageContainer style={{ backgroundImage: item.icon }}></ImageContainer>
							</Grid>
						</Card>
					</Grid>
				))}
			</IconContainer>
		</>
	);
};

export default CardImage;
