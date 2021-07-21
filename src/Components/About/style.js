import styled from "styled-components";
export const AboutSection = styled.div`
  height: 500px;
  background: url("/images/about-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
`;
export const AboutInfo = styled.div`
  width: 50%;
  max-height: 100%;
  position: absolute;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
`;
export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;
export const InfoSpan = styled.span`
  font-weight: normal;
`;
export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
`;
export const InfoDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;
export const InfoDescA = styled.a`
  text-decoration: none;
  display: inline;
`;
