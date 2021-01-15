import React, { Component } from "react";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image_url: "",
      description: ""
    };
  }
  render() {
    return <div>hi from cards yo</div>;
  }
}
