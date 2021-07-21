import React from "react";
import {
  AboutSection,
  AboutInfo,
  InfoTitle,
  InfoSpan,
  InfoDir,
  InfoDesc,
  InfoDescA,
} from "./style.js";
const About = () => {
  return (
    <AboutSection>
      <div class="container">
        <AboutInfo>
          <InfoTitle>
            <InfoSpan>This is</InfoSpan> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfoDescA>explicabo</InfoDescA> maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};
export default About;
