import React, { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import { Grid } from "@hudoro/neron";
import { Container, ContainerTitle, Title, Wrapper } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
	children: React.ReactNode;
	title?: string;
}

const LayoutOverlayData = ({
	isShowDetail,
	setIsShowDetail,
	formPosition,
	children,
	title,
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
				}}
			>
				{title && (
					<ContainerTitle>
						<Title>{title}</Title>
					</ContainerTitle>
				)}
				<Grid style={{ padding: "10px" }}>{children}</Grid>
			</Container>
		</Wrapper>
	);
};

export default LayoutOverlayData;
