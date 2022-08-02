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

interface IProps {
  data?: string[] | number[];
  title: string;
  activeDropdown: never[];
  setActiveDropdown: React.Dispatch<React.SetStateAction<never[]>>;
}

export default function StyledDropdownMenu({
  title,
  data,
  activeDropdown,
  setActiveDropdown,
}: IProps) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  const handleShowDropdownMenu = () => {
    setIsDropdownMenu(!isDropdownMenu);
  };

  const handleActiveAllDropdown = () => {
    if (activeDropdown.length === data?.length) {
      return setActiveDropdown([]);
    }
    return setActiveDropdown(data as never[]);
  };
  const handleActiveDropdown = (item: string | number) => {
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
          {data?.map((item, index) => {
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
