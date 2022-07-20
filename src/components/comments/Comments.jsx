import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { useAxiosGet } from "../hooks/HttpRequests";

export default function Comments() {
  const { id } = useParams();
  const url = `https://https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  let comments = useAxiosGet(url);
  let content = null;
  if (comments.error) {
    content = <p> There was an error, Please refresh or try again Later</p>;
  }
  if (comments.loading) {
    content = <Loader></Loader>;
  }
  if (comments.data) {
    content = (
      <>
        <h1 className="commentHeader">
          Comments
          <div className="commentWrapper">
            <div className="commentEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </div>
        </h1>
        <div className="commentInfo">
          <span className="commentName">{comments.data.name}</span>

          <span className="commentEmail">{comments.data.email}</span>
        </div>
        <p className="commentDesc">{comments.data.body}</p>
      </>
    );
  }
  return <div>{content}</div>;
}
