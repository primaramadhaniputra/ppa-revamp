import { IcChat } from "atoms/Icon";
import Cookies from "js-cookie";
import UserNameWithPosition from "molecules/UserNameWithPosition";
import React from "react";
import { IUserDetailPartisipanQuestions } from "utils/interfaces";
import { Container, Content, ContentValue, IconContainer, Title } from "./styles";

interface IProps {
	kritikSaran: IUserDetailPartisipanQuestions | undefined;
}
const KritikSaran = ({ kritikSaran }: IProps) => {
	const fullName = Cookies.get("fullName");
	const companyName = Cookies.get("companyName");

	return (
		<Container>
			<IconContainer>
				<IcChat width={24} />
			</IconContainer>
			<Title>Kritik & saran</Title>
			<Content>
				<UserNameWithPosition name={fullName || ""} position={companyName || ""} />
				<ContentValue>{kritikSaran?.questions[0].answer.value}</ContentValue>
			</Content>
		</Container>
	);
};

export default KritikSaran;
