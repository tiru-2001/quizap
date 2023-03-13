import React from "react";
import Child from "./Child";

const Container = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Quiz App</h1>
      <div className="containerP">
        <Child />
      </div>
    </>
  );
};

export default Container;
