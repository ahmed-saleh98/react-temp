import styled from "styled-components";

export const Navbar = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  float: left;
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const UlList = styled.ul`
  list-style: none;
  float: right;
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;
