import React from "react";
import Image from "next/image";
import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import { Container, ContainerChildren, ContainerTitle, Title, Wrapper } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
	children: React.ReactNode;
	title?: string;
	width?: number;
	button?: boolean;
}

const LayoutOverlayData = ({
	isShowDetail,
	setIsShowDetail,
	children,
	title,
	width,
	button,
}: IProps) => {
	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	return (
		<Wrapper
			style={{
				zIndex: isShowDetail ? 999 : -999,
				opacity: isShowDetail ? 1 : 0,
				transitionDelay: isShowDetail ? "0s" : ".3s",
			}}
			onClick={handleCloseShowDetail}
			className="wrapper"
		>
			<Container
				style={{
					transform: isShowDetail ? "translateY(40px)" : "translateY(-120%)",
					maxWidth: `${width}px`,
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<ContainerTitle>
						<Title>{title}</Title>
						<Image
							width={150}
							height={36}
							quality={100}
							alt="logo"
							src="http://ppa-mhu.net/assets/img/ss6-logo-panjang.png"
						/>
					</ContainerTitle>
				)}
				<ContainerChildren>{children}</ContainerChildren>
				{button && (
					<Grid
						container
						justifyContent="flex-end"
						style={{ margin: "10px 20px 20px auto", width: "100%" }}
					>
						<StyledButton style={{ maxWidth: "100px" }}>Save</StyledButton>
					</Grid>
				)}
			</Container>
		</Wrapper>
	);
};

export default LayoutOverlayData;
