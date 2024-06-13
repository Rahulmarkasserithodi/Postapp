import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <Link className="link" to={`posts/${props.singlePost.id}`}>
        <div className="postItem">
          <span className="postTitle">{props.singlePost.title}</span>
          <p className="postDesc">{props.singlePost.body}</p>
        </div>
        <div className="postUser">User ID:{props.singlePost.userId}</div>
        <div className="postId">ID:{props.singlePost.id}</div>
      </Link>
      <Link to={`/posts/${props.singlePost.id}`}>
        <div className="button-27" role="button">
          View
        </div>
      </Link>
    </div>
  );
}
