import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const { character } = props;
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="topnav">
          <a href="/">
            <img className="marvel" alt="avatar" src={"marvel.png"}></img>
          </a>
          <input
            onChange={props.handleChange}
            type="text"
            placeholder="Buscar.."
          ></input>
        </div>
      </form>
    </div>
  );
}
