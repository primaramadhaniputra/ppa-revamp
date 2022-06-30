import { Text } from "@hudoro/neron";
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text variant="h2">Loading...</Text>
    </div>
  );
}
