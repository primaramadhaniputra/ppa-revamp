import React, { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import { Grid } from "@hudoro/neron";
import Image from "next/image";
import { Container, ContainerTitle, Title, Wrapper } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
	children: React.ReactNode;
	title?: string;
	width?: number;
}

const LayoutOverlayData = ({
	isShowDetail,
	setIsShowDetail,
	formPosition,
	children,
	title,
	width,
}: IProps) => {
	const handleCloseShowDetail = (e: { target: { classList: string } }) => {
		const WrapperClass = [...e.target.classList];
		if (WrapperClass.includes("wrapper")) {
			setIsShowDetail(false);
		}
	};

	useEffect(() => {
		if (isShowDetail) {
			return disableBodyScroll(Html as unknown as HTMLElement | Element);
		}
		return enableBodyScroll(Html as unknown as HTMLElement | Element);
	}, [isShowDetail]);
	return (
		<Wrapper
			style={{
				zIndex: isShowDetail ? 999 : -999,
				opacity: isShowDetail ? 1 : 0,
				top: `${formPosition}px`,
			}}
			onClick={handleCloseShowDetail as any}
			className="wrapper"
		>
			<Container
				style={{
					transform: isShowDetail ? "translateY(100px)" : "translateY(0)",
					maxWidth: `${width}px`,
				}}
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
				<Grid style={{ padding: "10px" }}>{children}</Grid>
			</Container>
		</Wrapper>
	);
};

export default LayoutOverlayData;
