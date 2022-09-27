import React, { useState } from "react";
import { ArrowDown, DropdownContainer, Item, StyledInput, Wrapper } from "./styles";

const data = ["banan", "potato", "watermelon", "strawberry"];

interface IProps {
	placeholder?: string;
}

export default function RevisiDropdown({ placeholder }: IProps) {
	const [isDropdown, setIsDropdown] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleDropdown = () => {
		setIsDropdown(!isDropdown);
	};
	return (
		<Wrapper>
			<StyledInput
				placeholder={placeholder || "Revisi dropdown"}
				onClick={handleDropdown}
				value={inputValue}
				onChange={() => {}}
			/>
			<ArrowDown onClick={handleDropdown}></ArrowDown>
			{isDropdown && (
				<DropdownContainer>
					{data.map((item, index) => (
						<Item key={index} onClick={() => setInputValue(item)}>
							{item}
						</Item>
					))}
				</DropdownContainer>
			)}
		</Wrapper>
	);
}
