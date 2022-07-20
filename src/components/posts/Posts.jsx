import "./posts.css";
import React from "react";
import Loader from "../loader/Loader";
import Post from "../post/Post";
import { useAxiosGet } from "../hooks/HttpRequests";

export default function Posts() {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  let posts = useAxiosGet(url);
  let content = null;

  if (posts.error) {
    content = <p> There was an error, Please refresh or try again Later</p>;
  }
  if (posts.loading) {
    content = <Loader></Loader>;
  }

  if (posts.data) {
    content = posts.data.map((singlePost) => (
      <div key={singlePost.id}>
        <Post singlePost={singlePost} />
      </div>
    ));
  }
  return <div>{content}</div>;
}
