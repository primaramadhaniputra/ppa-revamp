import { Icon } from "@hudoro/neron";
import React, { useRef, useState } from "react";
import { Container, FilterText, Wrapper, WrapperChildren, WrapperIcon } from "./styles";

interface IProps {
	children: React.ReactNode;
}

const FilterLayouts = ({ children }: IProps) => {
	const containerRef = useRef<HTMLInputElement>(null);
	const [height, setHeight] = useState(0);

	const handleFilterHeight = () => {
		const { height: containerHeight } = containerRef?.current?.getBoundingClientRect() as any;
		if (height > 0) {
			setHeight(0);
		} else {
			setHeight(containerHeight + 10);
		}
	};

	return (
		<Wrapper>
			<WrapperIcon>
				<FilterText>Filter Data</FilterText>
				<Icon
					iconName="IcSearch"
					size={16}
					style={{ cursor: "pointer" }}
					onClick={handleFilterHeight}
				/>
			</WrapperIcon>
			<WrapperChildren
				style={{
					height: height ? `${height + 20}px` : `0px`,
					overflow: height ? "inherit" : "hidden",
				}}
			>
				<Container ref={containerRef}>{height ? children : null}</Container>
			</WrapperChildren>
		</Wrapper>
	);
};

export default FilterLayouts;
