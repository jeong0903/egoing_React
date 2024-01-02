import React, { Component } from "react";

class UpdateContent extends Component {
  render() {
    console.log(this.props.data);
    console.log('UpdateContent Render');
    return(
      <article>
      <h3>Update</h3>
      <form action="/create_process" method="post"
      onSubmit={function (e) {
        e.preventDefault();
        this.props.onSubmit(
          e.target.title.value,
          e.target.desc.value,
        );
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

export default UpdateContent;