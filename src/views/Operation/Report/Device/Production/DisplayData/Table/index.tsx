import { Text } from "@hudoro/neron";
import { THead, Table, TH, TBody, TD, Wrapper } from "./styles";

interface IProps {
	data: {
		[x: string]: string | number;
	}[];
}

export default function TableData({ data }: IProps) {
	if (data.length < 1) {
		return <Text variant="mute">Data Is Currently Empty</Text>;
	}
	const dataHead =
		data &&
		Object.keys(data[0]).filter(
			(item) => item !== "label" && item !== "value" && item !== "chartValue",
		);

	return (
		<Wrapper>
			<Table>
				<THead>
					<tr>
						{dataHead?.map((item, index) => (
							<TH key={index}>{item}</TH>
						))}
					</tr>
				</THead>
				<TBody>
					{data?.map((item, index) => (
						<tr key={index}>
							{dataHead?.map((dataText, key) => (
								<TD key={key}>{item[dataText]}</TD>
							))}
						</tr>
					))}
				</TBody>
			</Table>
		</Wrapper>
	);
}
