import React, { Component } from "react";
import axios from "axios";
import { SocialSection, SocialPart, Icon, P, Span, Info2 } from "./style.js";
class Social extends Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((socialItem) => {
      return (
        <SocialPart name={socialItem.name} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <P>
            <Span> {socialItem.title}</Span>
            <Info2>{socialItem.body}</Info2>
          </P>
        </SocialPart>
      );
    });
    return <SocialSection>{socialList}</SocialSection>;
  }
}
export default Social;
