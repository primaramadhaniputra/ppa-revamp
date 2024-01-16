import { Avatar, Icon } from "@hudoro/neron";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProfile } from "services/users";
import { notify } from "utils/functions";
import { ContainerUser, UserOverFlay, UserOverlayText } from "../styles";

const User = () => {
	const [userDropdown, setuserDropdown] = useState(false);
	const [userName, setUserName] = useState("Admin");
	const router = useRouter();

	useEffect(() => {
		getProfile({
			path: "profile",
		})
			.then((res) => setUserName(res.data.data.fullName.slice(0, 6)))
			.catch((err) => notify(err.message, "error"));
	}, []);

	const handleLogout = () => {
		Cookies.remove("token");
		router.replace("/");
		// return router.reload();
	};

	return (
		<ContainerUser
			onMouseEnter={() => setuserDropdown(true)}
			onMouseLeave={() => setuserDropdown(false)}
		>
			<p className="font-montserrat text-xs">{userName}</p>
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
					<UserOverlayText onClick={handleLogout}>Logout</UserOverlayText>
				</UserOverFlay>
			)}
		</ContainerUser>
	);
};

export default User;
