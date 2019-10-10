import React, { Component } from "react";

import Header from "./header/Header";

interface IProps {}
class EntryComponent extends Component<IProps> {
  render() {
    return (
      <div>
        <Header title="Test Title" />
        <h1>Entry Component</h1>
      </div>
    );
  }
}

export default EntryComponent;
