import React from "react";
import {
  LoadingContainer, 
  LoadingBox
} from "./style/loading";

const Loading = () => {
  return (
  <LoadingContainer>
		<LoadingBox>
			<div className="circle"></div>
			<span className="text">LOADING</span>
		</LoadingBox>
	</LoadingContainer>
  );
};

export default Loading;
