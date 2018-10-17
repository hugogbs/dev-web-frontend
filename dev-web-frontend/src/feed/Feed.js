import React, { Component } from "react";
import "./Feed.css";
import Post from "../post/Post";

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        Aqui é o feed!
        <p>E o feed é composto de vários posts, então : </p>
        <div>Aqui também dá pra criar um post (ou deveria ¯\_(ツ)_/¯)</div>
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default Feed;
