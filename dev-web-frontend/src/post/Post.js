import React, { Component } from 'react'
import "./Post.css"
import Comment from '../comment/Comment';

class Post extends Component {

    createCommentsList = () => {
        let commentsList = [];
        for (let i = 0; i < 5; i++) {
            commentsList.push(<div><Comment /></div>)
        }

        return commentsList;

    }
  render() {
    return (
      <div className="Post">
        Post bem bacana
        <p>Um post pode ter comentários, esse tem:</p>
        <div>
            {this.createCommentsList()}
        </div>
      </div>
    )
  }
}

export default Post;