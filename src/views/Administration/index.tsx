import React from "react";
import dynamic from "next/dynamic";

interface IProps {
   id: string;
}

const GAView = dynamic(() => import("./GA"));
const HCView = dynamic(() => import("./HC"));
const LegalView = dynamic(() => import("./Legal"));

const renderContent = (type: string) => {
   if (type === "hc") {
      return <HCView />;
   } else if (type === "ga") {
      return <GAView />;
   } else {
      return <LegalView />;
   }
};

export default function Legal({ id }: IProps) {
   return <>{renderContent(id)}</>;
}
