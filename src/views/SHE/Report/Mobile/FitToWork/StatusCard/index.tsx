import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import { Container, Title, TitleNumber, Wrapper } from "./styles";

const dummyData = [
	{
		title: "Fit",
		image: "http://ppa-mhu.net/assets/img/web/ftw/6.png",
	},
	{
		title: "UnFit",
		image: "http://ppa-mhu.net/assets/img/web/ftw/3.png",
	},
	{
		title: "Observasi",
		image: "http://ppa-mhu.net/assets/img/web/ftw/1.png",
	},
	{
		title: "Kurang istirahat",
		image: "http://ppa-mhu.net/assets/img/web/ftw/4.png",
	},
	{
		title: "Minum obat",
		image: "http://ppa-mhu.net/assets/img/web/ftw/5.png",
	},
	{
		title: "Sakit",
		image: "http://ppa-mhu.net/assets/img/web/ftw/1.png",
	},
];

const StatusCard = () => {
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
			<Wrapper>
				{dummyData.map((item, index) => (
					<Container onClick={handleShowDetail} key={index}>
						<Grid
							container
							alignItems="center"
							justifyContent="center"
							style={{ flex: 1, padding: "20px 0" }}
						>
							<Image src={item.image} alt="Status" width={80} height={80} quality={100} />
						</Grid>
						<Grid
							container
							flexDirection="column"
							alignItems="center"
							style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
						>
							<Title>{item.title}</Title>
							<TitleNumber>0</TitleNumber>
						</Grid>
					</Container>
				))}
			</Wrapper>
		</>
	);
};

export default StatusCard;
