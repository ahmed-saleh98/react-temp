import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Logo, LogoText, UlList, ListItem, Anchor } from "./style";
const Nav = () => {
  return (
    <Navbar>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Link to="/contact">contact</Link>
          </ListItem>
        </UlList>
      </div>
    </Navbar>
  );
};
export default Nav;
