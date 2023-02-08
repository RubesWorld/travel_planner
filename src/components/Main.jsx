import React from "react";
import data from "../data";
import Card from "./Card";

const Main = () => {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <>
      <div>{cards}</div>
    </>
  );
};

export default Main;
