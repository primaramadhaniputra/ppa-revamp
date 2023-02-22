import Footer from "src/components/organism/Footer";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";

export default function Login6() {
	return (
		<Wrapper>
			<WrapperImageInput>
				<Form />
			</WrapperImageInput>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</Wrapper>
	);
}
