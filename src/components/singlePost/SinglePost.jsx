import React from "react";
import { useParams } from "react-router-dom";
import "./singlePost.css";
import Loader from "../loader/Loader";
import { useAxiosGet } from "../hooks/HttpRequests";

export default function SinglePost() {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let singlePost = useAxiosGet(url);
  let content = null;
  if (singlePost.error) {
    content = <p> There was an error, Please refresh or try again Later</p>;
  }
  if (singlePost.loading) {
    content = <Loader></Loader>;
  }
  if (singlePost.data) {
    content = (
      <div className="singlePost">
        <div className="singlePostWrapper">
          <h1 className="singlePostTitle">
            {singlePost.data.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostUser">
              User ID:{singlePost.data.userId}
            </span>

            <span className="singlePostID">ID: {singlePost.data.id}</span>
          </div>
          <p className="singlePostDesc">{singlePost.data.body}</p>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
}
