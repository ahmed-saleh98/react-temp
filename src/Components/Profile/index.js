import React from "react";
import {
  ProfileSection,
  ProfilePart,
  ProfileList,
  ProfileItem,
  ItemSpan,
  Web,
  SkillsPart,
  SkillsDesc,
  SkillsBar,
  Title,
  Perc,
  Parent,
  ParentSpan,
  ProfileTitle,
  SkillsTitle,
  ProfileSpan,
  SkillsSpan,
} from "./style.js";
const Profile = () => {
  return (
    <ProfileSection>
      <div className="container">
        <ProfilePart>
          <ProfileTitle>
            <ProfileSpan>My </ProfileSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <ItemSpan>Name</ItemSpan>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem>
              <ItemSpan>Birthday</ItemSpan>
              21/1/1996
            </ProfileItem>
            <ProfileItem>
              <ItemSpan>Address</ItemSpan>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <ItemSpan>Phone</ItemSpan>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <ItemSpan>Email</ItemSpan>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <ItemSpan>Website</ItemSpan>
              <Web>www.google.com</Web>
            </ProfileItem>
          </ProfileList>
        </ProfilePart>

        <SkillsPart>
          <SkillsTitle>
            Some <SkillsSpan>skills</SkillsSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          <SkillsBar>
            <Title>Bootstrap</Title>
            <Perc>100%</Perc>
            <Parent>
              <ParentSpan sp1></ParentSpan>
            </Parent>
          </SkillsBar>

          <SkillsBar>
            <Title>CSS3</Title>
            <Perc>90%</Perc>
            <Parent>
              <ParentSpan sp2></ParentSpan>
            </Parent>
          </SkillsBar>

          <SkillsBar>
            <Title>Photoshop</Title>
            <Perc>80%</Perc>
            <Parent>
              <ParentSpan sp3></ParentSpan>
            </Parent>
          </SkillsBar>
        </SkillsPart>
      </div>
    </ProfileSection>
  );
};
export default Profile;
