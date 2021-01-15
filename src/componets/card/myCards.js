import React, { Component } from "react";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image_url: "https://source.unsplash.com/random/300x300",
      description: ""
    };
  }

  render() {
    return (
      <div className="card">
        <div className="card-bg">
          <img src={this.state.image_url} alt="logo" />

          <h4>{this.state.name}</h4>
          <div className="description">
            <p>{this.state.description}</p>
          </div>
        </div>
        <button className="my-btn">ActionBtn</button>
      </div>
    );
  }
}
