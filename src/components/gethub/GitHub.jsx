import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import InfoContext from "../../store/InforProvider";
function GitHub() {
  const Info = useLoaderData();
  const { name } = useContext(InfoContext);
  if (!name) {
    return (
      <>
        <div className="text-center">Login to show</div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-center">Login toggg show</div>
      </>
    );
  }
}

export default GitHub;
function Infromations() {
  return { name: "ashi" };
}
export { Infromations };
