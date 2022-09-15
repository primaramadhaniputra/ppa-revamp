import { Grid } from "@hudoro/neron";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { MenuContainer, SubMenu, SubMenuText, SubMenuWrapper } from "./styles";

interface IProps {
	item: {
		title: string;
		subMenu: {
			subMenuTitle: string;
			subMenuLink: string;
		}[];
	};
}

export default function HamburgerMenu({ item }: IProps) {
	const [isShowSubMenu, setIsShowSubMenu] = useState(false);
	const [subMenuHeight, setSubMenuHeight] = useState(0);
	const subMenuRef = useRef<HTMLInputElement>(null);
	const handleSubMenu = () => {
		const height = subMenuRef?.current?.getBoundingClientRect().height;
		if (subMenuHeight < 1) {
			setSubMenuHeight(height as number);
		} else {
			setSubMenuHeight(0);
		}
		setIsShowSubMenu(!isShowSubMenu);
	};
	return (
		<MenuContainer container flexDirection="column">
			<Grid container>
				<StyledTextDropdownUser
					title={item.title}
					handleClick={handleSubMenu}
					iconName={isShowSubMenu ? "IcArrowUp" : "IcArrowDown"}
					styles={{ color: "white", fontSize: "14px" }}
				/>
			</Grid>
			<SubMenuWrapper height={subMenuHeight}>
				<SubMenu ref={subMenuRef}>
					{item.subMenu.map((data, index) => (
						<Link href={`/dashboard/${data.subMenuLink}`}>
							<SubMenuText key={index} variant="h4">
								{data.subMenuTitle}
							</SubMenuText>
						</Link>
					))}
				</SubMenu>
			</SubMenuWrapper>
		</MenuContainer>
	);
}
