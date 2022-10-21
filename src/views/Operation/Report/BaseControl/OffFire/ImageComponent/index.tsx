import { Grid, Text } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { Container, Wrapper } from "./styles";

const ImageComponent = () => {
	return (
		<Wrapper>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="http://ppa-mhu.net/assets/img/offhire/PC.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="http://ppa-mhu.net/assets/img/offhire/WT.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="	http://ppa-mhu.net/assets/img/offhire/DOZER.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="http://ppa-mhu.net/assets/img/offhire/GRADER.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="http://ppa-mhu.net/assets/img/offhire/HD.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
			<Container>
				<Grid style={{ width: "200px" }}>
					<Image
						src="	http://ppa-mhu.net/assets/img/offhire/FT.png"
						width={300}
						height={150}
						quality={100}
						alt="image"
						layout="responsive"
					/>
				</Grid>
				<Grid container alignItems="center" justifyContent="space-between" gap={50}>
					<Text variant="h4">PC1250-8R</Text>
					<Text variant="mute">10</Text>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default ImageComponent;
