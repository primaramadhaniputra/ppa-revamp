import React from "react";

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Dept: "HD787",
		MP: "Hd123",
		["New version"]: `33${index}`,
		["Old version"]: "2022-17-08",
		Update: "2022-17-08",
	};
});

export default function UserFeedback() {
	return <></>;
}
