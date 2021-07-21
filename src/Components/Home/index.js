import React from "react";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  HomeBtn,
  Span,
} from "./style.js";
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Ahmed Saleh</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>Front-End Developer</Span>
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};
export default Home;
