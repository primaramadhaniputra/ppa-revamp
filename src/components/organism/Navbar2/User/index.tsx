import { Avatar, Icon, Text } from "@hudoro/neron";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProfile } from "services/users";
import { notify, useWindowSize } from "utils/functions";
import { ContainerUser, UserOverFlay, UserOverlayText } from "../styles";

const User = () => {
	const { width } = useWindowSize();
	const [userDropdown, setuserDropdown] = useState(false);
	const [userName, setUserName] = useState("Dani");

	useEffect(() => {
		getProfile({
			path: "profile",
		})
			.then((res) => setUserName(res.data.data.fullName.slice(0, 6)))
			.catch((err) => notify(err.message, "error"));
	}, []);

	return (
		<ContainerUser
			onMouseEnter={() => setuserDropdown(true)}
			onMouseLeave={() => setuserDropdown(false)}
		>
			{width > 1024 && <Text variant="p">{userName}</Text>}
			<Avatar
				src="/icons/tukang.jpg"
				size="m"
				style={{ height: "35px", width: "35px" }}
				alt="user image"
			/>
			<Icon iconName="IcArrowDown" color="white" />
			{userDropdown && (
				<UserOverFlay>
					<Link href="/dashboard/pengaturan" passHref>
						<UserOverlayText>Pengaturan</UserOverlayText>
					</Link>
					<Link href="/" passHref>
						<UserOverlayText>Logout</UserOverlayText>
					</Link>
				</UserOverFlay>
			)}
		</ContainerUser>
	);
};

export default User;
