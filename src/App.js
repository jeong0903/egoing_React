import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div className="App">Hello React 💁🏻‍♀️
      <Subject title="WEB" sub="world wide web!!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title ="HTML" desc="HTML is Hyper Text Mark up Languege."></Content>
    </div>
    );
  }
}

export default App;