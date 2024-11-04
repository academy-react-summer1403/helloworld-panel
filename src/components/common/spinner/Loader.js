import React from "react";
import { BeatLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <BeatLoader color="#36d7b7" style={{ marginTop: "10%" }} />
    </div>
  );
};
