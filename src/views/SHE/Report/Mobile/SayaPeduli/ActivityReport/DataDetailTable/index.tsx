import { Grid, Icon, Lozenge, Text } from "@hudoro/neron";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { TabContainer, TabText } from "./styles";
interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const tabsData = ["Location", "Question Response"];

export default function DataDetailTable({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const [activeTab, setActiveTab] = useState(0);

	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	const handleChangeActiveTab = (id: number) => {
		setActiveTab(id);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					style={{ borderBottom: "1px solid rgba(0,0,0,.1)", paddingBottom: "10px" }}
				>
					<Text variant="h3">AAN FITRINSYAH</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={handleCloseShowDetail} />
				</Grid>
				<Grid container justifyContent="space-around" gap={10}>
					<Grid
						container
						flexDirection="column"
						gap={10}
						style={{ flex: 1, maxWidth: "400px", minWidth: "150px" }}
					>
						<Grid container alignItems="center" justifyContent="space-around">
							<Text variant="h4">Roster</Text>
							<Text variant="p">Dinas</Text>
						</Grid>
					</Grid>
					<Grid
						container
						flexDirection="column"
						gap={10}
						style={{ flex: 1, maxWidth: "400px", minWidth: "150px" }}
					>
						<Grid container alignItems="center" justifyContent="space-around">
							<Text variant="h4">Location</Text>
							<Text variant="p">100</Text>
						</Grid>
					</Grid>
				</Grid>
				<Grid style={{ marginTop: "50px" }}>
					<TabContainer>
						{tabsData.map((item, index) => (
							<TabText
								key={index}
								style={{
									backgroundColor: activeTab === index ? "rgba(0,0,0,.1)" : "",
									border: "none",
								}}
								onClick={() => handleChangeActiveTab(index)}
							>
								{item}
							</TabText>
						))}
					</TabContainer>
					<Grid>
						<TabText style={{ justifyContent: "space-around", gap: "10px", padding: "5px 0" }}>
							lorem <Lozenge label="tidak" variant="black-strong" />
						</TabText>
						<TabText style={{ justifyContent: "space-around", gap: "10px", padding: "5px 0" }}>
							lorem <Lozenge label="tidak" variant="black-strong" />
						</TabText>
						<TabText style={{ justifyContent: "space-around", gap: "10px", padding: "5px 0" }}>
							lorem <Lozenge label="tidak" variant="black-strong" />
						</TabText>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
