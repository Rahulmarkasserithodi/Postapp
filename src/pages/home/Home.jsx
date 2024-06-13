import React from "react";
import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Lgnhome from "../../components/lgnhome/Lgnhome";

function Home() {
  let user = false;
  return (
    <>
      <Header />
      <div className="home"></div>

      <div>{user ? <Lgnhome /> : <Posts />}</div>
    </>
  );
}

export default Home;
