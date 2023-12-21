import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: {title:'WEB', sub:'World Wide Web!!'},
      contents:[
        {id: 1, title:'HTML', desc: 'HTML is for information'},
        {id: 2, title:'CSS', desc: 'CSS is for design'},
        {id: 3, title:'Java Script', desc: 'JS is for interactive'},
      ],
    }
  }
  render() {
    return (
    <div className="App">Hello React 💁🏻‍♀️
      <Subject 
      title={this.state.subject.title}
      sub={this.state.subject.sub} />
      <Subject title="React" sub="For UI" />
      <TOC data={this.state.contents}/>
      <Content title ="HTML" desc="HTML is Hyper Text Mark up Languege." />
    </div>
    );
  }
}

export default App;