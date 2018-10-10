import React, { Component } from 'react'
import "./Post.css"
import Comment from '../comment/Comment';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        Post bem bacana
        <p>Um post pode ter comentários, esse tem:</p>
        <div>
            <Comment />
        </div>
      </div>
    )
  }
}

export default Post;