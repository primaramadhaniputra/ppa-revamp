import React, { useState } from "react";
import {
  ArrowDown,
  DropdownMenuContainer,
  DropdownText,
  DropdownTextAll,
  StyledInput,
  StyledLabel,
  Wrapper,
} from "./styles";

const dataDropdown = ["A", "B", "C", "D", "E", "F"];

interface IProps {
  title: string;
}

export default function StyledDropdownMenu({ title }: IProps) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState([]);

  const handleShowDropdownMenu = () => {
    setIsDropdownMenu(!isDropdownMenu);
  };

  const handleActiveAllDropdown = () => {
    setActiveDropdown(dataDropdown as never[]);
  };
  const handleActiveDropdown = (item: string) => {
    const isItem = activeDropdown.find((e) => e === item);
    if (isItem) {
      const newItem = activeDropdown.filter((e) => e !== isItem);
      return setActiveDropdown(newItem);
    }
    return setActiveDropdown([...activeDropdown, item] as never);
  };

  return (
    <Wrapper>
      <StyledLabel>{title}</StyledLabel>
      <StyledInput
        onClick={handleShowDropdownMenu}
        value={activeDropdown}
        placeholder="..."
      />
      <ArrowDown />
      {isDropdownMenu && (
        <DropdownMenuContainer>
          <DropdownTextAll onClick={handleActiveAllDropdown}>
            ALL
          </DropdownTextAll>
          {dataDropdown.map((item, index) => {
            const isActive = activeDropdown.find((e) => e === item);
            return (
              <DropdownText
                className={isActive ? "active" : ""}
                key={index}
                onClick={() => handleActiveDropdown(item)}
              >
                {item}
              </DropdownText>
            );
          })}
        </DropdownMenuContainer>
      )}
    </Wrapper>
  );
}
