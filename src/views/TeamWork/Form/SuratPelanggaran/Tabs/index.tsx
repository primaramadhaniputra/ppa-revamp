import { Grid } from "@hudoro/neron";
import React from "react";
import { TabsText } from "./styles";

const tabsTitle = [
  "Sanksi Teguran",
  "Sanksi Peringatan Pertama",
  "Sanksi Peringatan Kedua",
  "Sanksi Peringatan Terakhir",
];

interface IProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function Tabs({ activeTab, setActiveTab }: IProps) {
  return (
    <Grid container gap={5}>
      {tabsTitle.map((item, index) => (
        <TabsText
          className={activeTab === index ? "active" : ""}
          key={index}
          onClick={() => setActiveTab(index)}
        >
          {item}
        </TabsText>
      ))}
    </Grid>
  );
}
