import React, { Component, div } from "react";
import { render } from "react-dom";
import Portfolio from "./Portfolio";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{overflow:'auto'}}>
        <div>
          <Portfolio />
        </div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
