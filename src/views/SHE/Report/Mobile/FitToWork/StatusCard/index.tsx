import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { colors } from "utils/styles";
import { Container, Title, TitleNumber, Wrapper } from "./styles";

const StatusCard = () => {
	return (
		<Wrapper>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="http://ppa-mhu.net/assets/img/web/ftw/6.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Fit</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="http://ppa-mhu.net/assets/img/web/ftw/3.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Unfit</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="	http://ppa-mhu.net/assets/img/web/ftw/1.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Observasi</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="http://ppa-mhu.net/assets/img/web/ftw/4.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Kurang Istirahat</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="http://ppa-mhu.net/assets/img/web/ftw/5.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Minum Obat</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
			<Container>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					style={{ flex: 1, padding: "20px 0" }}
				>
					<Image
						src="http://ppa-mhu.net/assets/img/web/ftw/1.png"
						alt="Status"
						width={80}
						height={80}
						quality={100}
					/>
				</Grid>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					style={{ flex: 1, backgroundColor: colors.blue, color: "white", padding: "10px" }}
				>
					<Title>Sakit</Title>
					<TitleNumber>0</TitleNumber>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default StatusCard;
