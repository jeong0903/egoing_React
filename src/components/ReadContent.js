import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    console.log('Content Render');
    return(
      <article>
      <h3>{this.props.title}</h3>
      {this.props.desc}
    </article>
    )
  }
}

export default ReadContent;