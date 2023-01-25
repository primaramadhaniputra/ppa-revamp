import React from "react";
import SingleCard from "./SingleCard";
import { Wrapper } from "./styles";

const CardDetail = () => {
	return (
		<Wrapper>
			<SingleCard />
			<SingleCard />
			<SingleCard />
			<SingleCard />
		</Wrapper>
	);
};

export default CardDetail;
