import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar(props) {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topLeftList">
          <li className="topListItem">Welcome</li>
        </ul>
      </div>

      <div className="topRight">
        <ul className="topRightList">
          <li className="topRightListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topRightListItem">
            <Link className="link" onClick={props.login}>
              {props.status ? (
                <Link className="link" to="/">
                  <li onClick={handleClick} className="topRightListItem">
                    LOGOUT
                  </li>
                </Link>
              ) : (
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
