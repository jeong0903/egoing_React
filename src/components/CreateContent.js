import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log('Content Render');
    return(
      <article>
      <h3>Create</h3>
      <form action="/create_process" method="post"
      onSubmit={function (e) {
        e.preventDefault();
        alert('Submit :) ')
      }.bind(this)}
      >
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="desc" placeholder="description"/></p>
        <p><input type="submit" /></p>
      </form>
    </article>
    )
  }
}

export default CreateContent;