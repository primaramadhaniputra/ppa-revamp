import React from "react";
import { LinkWrapper, WrapperDropdown } from "../styles";
import TextDropdown from "../TextDropdown";

interface IProps {
  Link: {
    title: string;
    subMenu: string[];
  }[];
  dropDownHeight: number;
  activeDropdown: number;
  setactiveDropdown: React.Dispatch<React.SetStateAction<number>>;
}

function Dropdown({
  Link,
  dropDownHeight,
  activeDropdown,
  setactiveDropdown,
}: IProps) {
  return (
    <WrapperDropdown variant={dropDownHeight}>
      <LinkWrapper gap={10}>
        {Link.map((item, index) => (
          <TextDropdown
            user={false}
            key={index}
            dropDownData={item.subMenu}
            activeDropdown={activeDropdown}
            setactiveDropdown={setactiveDropdown}
            index={index}
            title={item.title}
          />
        ))}
      </LinkWrapper>
    </WrapperDropdown>
  );
}

export default Dropdown;
