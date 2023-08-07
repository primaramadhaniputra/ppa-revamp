import React from "react";

interface IProps {
	Body?: React.ReactNode;
}

const PopOver = ({ Body }: IProps) => {
	return <div>{Body}</div>;
};

export default PopOver;
